const translations = {
    en: {
        desc: "This extension ensures audio from <strong>TikTok</strong>, <strong>Instagram</strong>, and <strong>Facebook</strong> keeps playing even when you switch tabs or minimize the browser.",
        status: "Active",
        footer: "Made for You"
    },
    pl: {
        desc: "Ta wtyczka dba o to, aby dźwięk z <strong>TikToka</strong>, <strong>Instagrama</strong> i <strong>Facebooka</strong> grał zawsze, nawet gdy zmienisz kartę lub zminimalizujesz przeglądarkę.",
        status: "Aktywna",
        footer: "Stworzone dla Ciebie"
    },
    de: {
        desc: "Diese Erweiterung sorgt dafür, dass Audio von <strong>TikTok</strong>, <strong>Instagram</strong> und <strong>Facebook</strong> weiterläuft, auch wenn Sie den Tab wechseln oder den Browser minimieren.",
        status: "Aktiv",
        footer: "Für dich gemacht"
    },
    fr: {
        desc: "Cette extension garantit que l'audio de <strong>TikTok</strong>, <strong>Instagram</strong> et <strong>Facebook</strong> continue de jouer même lorsque vous changez d'onglet ou réduisez le navigateur.",
        status: "Actif",
        footer: "Fait pour vous"
    },
    it: {
        desc: "Questa estensione garantisce che l'audio di <strong>TikTok</strong>, <strong>Instagram</strong> e <strong>Facebook</strong> continui a essere riprodotto anche quando cambi scheda o riduci a icona il browser.",
        status: "Attivo",
        footer: "Fatto per te"
    },
    es: {
        desc: "Esta extensión asegura que el audio de <strong>TikTok</strong>, <strong>Instagram</strong> y <strong>Facebook</strong> siga reproduciéndose incluso cuando cambias de pestaña o minimizas el navegador.",
        status: "Activo",
        footer: "Hecho para ti"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    const descEl = document.getElementById('desc');
    const statusEl = document.getElementById('status-text');
    const footerEl = document.getElementById('footer-text');

    chrome.storage.local.get(['language'], (result) => {
        const lang = result.language || 'en';
        console.log('Loaded language:', lang);
        langSelect.value = lang;
        updateText(lang);
    });

    langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        chrome.storage.local.set({ language: selectedLang }, () => {
            console.log('Language saved:', selectedLang);
        });
        updateText(selectedLang);
    });

    function updateText(lang) {
        const t = translations[lang];
        if (t) {
            descEl.innerHTML = t.desc;
            statusEl.textContent = t.status;
            footerEl.textContent = t.footer;
        }
    }
});
