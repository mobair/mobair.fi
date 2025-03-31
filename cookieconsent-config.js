import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    // root: 'body',
    // autoShow: true,
    // disablePageInteraction: true,
    // hideFromBots: true,
    // mode: 'opt-in',
    // revision: 0,

    cookie: {
        name: 'cc_cookie',
        // domain: location.hostname,
        // path: '/',
        // sameSite: "Lax",
        // expiresAfterDays: 182,
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
        consentModal: {
            layout: 'cloud inline',
            position: 'bottom center',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired',cookie);
    },

    onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie)
    },

    onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
    },

    onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
    },

    onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
    },

    onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
    },

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: '_gid',   // string: exact cookie name
                    }
                ]
            },

            // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
                ga: {
                    label: 'Google Analytics',
                    onAccept: () => {},
                    onReject: () => {}
                },
                youtube: {
                    label: 'Youtube Embed',
                    onAccept: () => {},
                    onReject: () => {}
                },
            }
        },
        ads: {}
    },

    language: {
        default: 'fi',
        translations: {
            fi: {
                consentModal: {
                    title: 'Tämä sivusto käyttää evästeitä',
                    description: 'Käytämme evästeitä, jotta sivustomme toimii oikein ja voimme personoida sisältöä ja mainoksia, tarjota sosiaalisen median ominaisuuksia ja analysoida tietoliikennettä. Jaamme myös tietoja tavasta, jolla käytät sivustoamme sosiaalisen median, mainonta- ja analytiikkakumppaneidemme kanssa.Lisää tietoa',
                    acceptAllBtn: 'Hyväksy kaikki evästeet',
                    acceptNecessaryBtn: 'Hylkää kaikki',
                    showPreferencesBtn: 'Evästeaseukset',
                    // closeIconLabel: 'Reject all and close modal',
                    footer: `
                        <a href="#path-to-impressum.html" target="_blank">Impressum</a>
                        <a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
                    `,
                },
                preferencesModal: {
                    title: 'Evästeasetukset',
                    acceptAllBtn: 'Hyväksy kaikki',
                    acceptNecessaryBtn: 'Hylkää kaikki',
                    savePreferencesBtn: 'Hyväksy nykyinen valinta',
                    closeIconLabel: 'Close modal',
                    serviceCounterLabel: 'Service|Services',
                    sections: [
                        {
                            title: 'Your Privacy Choices',
                            description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
                        },
                        {
                            title: 'Strictly Necessary',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Tilastot',
                            description: 'Tilastoevästeet auttavat sivuston omistajia ymmärtämään, miten käyttäjät ovat vuorovaikutuksessa sivustojen kanssa, keräämällä ja raportoimalla tietoja nimettömästi.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Description'
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: location.hostname,
                                        desc: 'Description 1',
                                    },
                                    {
                                        name: '_gid',
                                        domain: location.hostname,
                                        desc: 'Description 2',
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Markkinointi',
                            description: 'Markkinointievästeitä käytetään verkkosivustoilla kävijöiden seurantaan. Tarkoituksena on näyttää mainoksia, jotka ovat sopivia ja kiinnostavia yksittäisille käyttäjille, ja siten arvokkaampia julkaisijoille ja kolmansien osapuolten mainostajille.',
                            linkedCategory: 'ads',
                        },
                        {
                            title: 'Lisää tietoa',
                            description: 'Jos sinulla on kysyttävää evästekäytännöstämme ja valinnoistasi, <a href="#contact-page">ota yhteyttä</a>'
                        }
                    ]
                }
            }
        }
    }
});