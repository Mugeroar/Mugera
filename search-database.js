// search-database.js
// Centralized search database for I AM MUGERA

const SEARCH_DATABASE = [
    { 
        title: "Eye of Mugera", 
        category: "Journal", 
        icon: "far fa-newspaper", 
        keywords: ["news","eye","weekly","journal","articles", "in-sight"], 
        url: "eye-of-mugera.html" 
    },
    { 
        title: "Inspired.Me Program", 
        category: "Program", 
        icon: "fas fa-seedling", 
        keywords: ["inspired","program","holistic","wellness","mental","physical","financial","social"], 
        url: "inspire-program.html" 
    },
    { 
        title: "African Heritage Shop", 
        category: "Shop", 
        icon: "fas fa-store", 
        keywords: ["shop","store","merchandise","books","heritage","african"], 
        url: "shop.html" 
    },
    { 
        title: "WorkFit Club", 
        category: "Club", 
        icon: "fas fa-dumbbell", 
        keywords: ["fitness","wellness","gym","workout","sports","health","club"], 
        url: "workfit-club.html" 
    },
    { 
        title: "DEV•HUB", 
        category: "Services", 
        icon: "fas fa-code", 
        keywords: ["web","development","software","apps","coding","mugeradev","programming"], 
        url: "mugeradev.html" 
    },
    { 
        title: "Inbox", 
        category: "Messaging", 
        icon: "fas fa-inbox", 
        keywords: ["inbox","messages","chat","mail","private"], 
        url: "inbox.html" 
    },
    { 
        title: "BrandIn", 
        category: "SERVICE", 
        icon: "fas fa-briefcase", 
        keywords: ["personal","branding","brand","brandin","website"], 
        url: "brandin.html" 
    },
    { 
        title: "SURA", 
        category: "SERVICE", 
        icon: "fas fa-user", 
        keywords: ["sura","profile","portfolio","business","card"], 
        url: "sura.html" 
    },
    { 
        title: "DELIVERY", 
        category: "JOB", 
        icon: "fas fa-truck", 
        keywords: ["delivery","deliver","package","driver","deliverer"], 
        url: "delivery-assistant.html" 
    },
    { 
        title: "DATA ENTRY MASTERY", 
        category: "COURSE", 
        icon: "fas fa-table", 
        keywords: ["data","entry","data entry","d","course"], 
        url: "data-entry.html" 
    },
    { 
        title: "WEB DEVELOPMENT", 
        category: "COURSE", 
        icon: "fas fa-code", 
        keywords: ["web","develop","developer","coding","course"], 
        url: "web-dev.html" 
    },
    { 
        title: "LEADERSHIP MASTERY", 
        category: "COURSE", 
        icon: "fas fa-crown", 
        keywords: ["leader","mastery","lead","leadership","course"], 
        url: "leadership-mastery.html" 
    },
    { 
        title: "Voice Central", 
        category: "Media", 
        icon: "fas fa-microphone-alt", 
        keywords: ["voice","central","conversations","podcast"], 
        url: "mugera.html" 
    },
    { 
        title: "PAYMENTS", 
        category: "PAYMENTS", 
        icon: "fas fa-wallet", 
        keywords: ["pay","partner","payment","partnerships"], 
        url: "payments.html" 
    },
    { 
        title: "PICK-ME", 
        category: "SERVICE", 
        icon: "fas fa-car", 
        keywords: ["taxi","driver","pick","me"], 
        url: "pickme.html" 
    },
    { 
        title: "PICK-UP", 
        category: "SERVICE", 
        icon: "fas fa-truck", 
        keywords: ["pick","up","delivery","deliver"], 
        url: "pickup.html" 
    },
    { 
        title: "HEKIMA•HUB", 
        category: "COURSES", 
        icon: "fas fa-university", 
        keywords: ["school","class","course","hekima"], 
        url: "courses.html" 
    }
];

// Make it globally available
window.SEARCH_DATABASE = SEARCH_DATABASE;
