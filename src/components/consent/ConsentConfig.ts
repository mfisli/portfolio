import type { CookieConsentConfig } from 'vanilla-cookieconsent';

// Extend the Window interface to include the dataLayer object
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

const grant = () => {
  window.gtag("consent", "update", {
    analytics_storage: "granted"
  });
}

const deny = () => {
  window.gtag("consent", "update", {
    analytics_storage: "denied"
  });
}

export const config: CookieConsentConfig = {
  root: "#cc-container",
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
        enabled: true,
        services: {
          ga: {
            label: "Google Analytics",
            onAccept: grant,
            onReject: deny,
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            'I value your privacy. I use cookies to enhance site navigation, analyze site usage, and identify new features.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="/privacy-policy">Privacy Policy</a>\n<a href="/terms-and-conditions">Terms and conditions</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'Please read the <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-and-conditions">Terms and conditions</a> to better understand the usage of cookies on this site.',
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'Used for the core functionality of this site. Without them, this site cannot function properly.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'Used to save settings like personal preferences.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'Used to track page views and events, like button clicks.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any query in relation to my policy on cookies and your choices, please contact me at maks@maksfisli.com',
            },
          ],
        },
      },
    },
  },
};
