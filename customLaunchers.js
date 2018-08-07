const customLaunchers = {
  bs_chrome_mac: {
    base: 'BrowserStack',
    browser: 'Chrome',
    browser_version: '49',
    os: 'OS X',
    os_version: 'Mountain Lion',
  },
  bs_firefox_mac: {
    base: 'BrowserStack',
    browser: 'Firefox',
    browser_version: '48',
    os: 'OS X',
    os_version: 'Mountain Lion',
  },
  bs_safari_mac: {
    base: 'BrowserStack',
    browser: 'Safari',
    browser_version: '6.2',
    os: 'OS X',
    os_version: 'Mountain Lion',
  },
};

const browsers = ['bs_chrome_mac', 'bs_firefox_mac', 'bs_safari_mac'];

module.exports = { customLaunchers, browsers };
