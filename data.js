const setTimes = [
    {
        stage: "Main Stage",
        day: "Thursday",
        performances: [
            { time: "15:00", artist: "D'PHAULT", duration: "01:00", endTime: "16:00" },
            { time: "16:00", artist: "WANDILE MBAMBENI", duration: "01:00", endTime: "17:00" },
            { time: "17:00", artist: "MARS BABY", duration: "01:15", endTime: "18:15" },
            { time: "18:15", artist: "MATTHEW MOLE", duration: "01:30", endTime: "19:45" },
            { time: "19:45", artist: "JOY OLADOKUN", duration: "01:30", endTime: "21:15" },
            { time: "21:15", artist: "KASH CPT", duration: "01:00", endTime: "22:15" },
            { time: "22:15", artist: "ZEE NXUMALO", duration: "01:00", endTime: "23:15" },
            { time: "23:15", artist: "MI CASA", duration: "01:15", endTime: "00:30" },
            { time: "00:30", artist: "BOOHLE", duration: "01:30", endTime: "02:00" },
            { time: "02:00", artist: "MUSA KEYS", duration: "02:00", endTime: "04:00" }
        ],
        filterValue: "main"
    },
    {
        stage: "Main Stage",
        day: "Friday",
        performances: [
            { time: "17:00", artist: "BANTWANAS", duration: "01:00", endTime: "18:00" },
            { time: "18:30", artist: "MANANA", duration: "01:15", endTime: "19:45" },
            { time: "19:45", artist: "SHEKHINAH", duration: "01:15", endTime: "21:00" },
            { time: "21:00", artist: "NASTY C", duration: "01:30", endTime: "22:30" },
            { time: "22:30", artist: "AYRA STARR", duration: "01:30", endTime: "00:00" },
            { time: "00:00", artist: "SNOH AALEGRA", duration: "01:00", endTime: "01:00" }
        ],
        filterValue: "main"
    },
    {
        stage: "Main Stage",
        day: "Saturday",
        performances: [
            { time: "16:00", artist: "INTERNET GIRL", duration: "01:15", endTime: "17:15" },
            { time: "17:15", artist: "MARCUS HARVEY", duration: "01:00", endTime: "18:15" },
            { time: "18:30", artist: "BLXCKIE", duration: "01:15", endTime: "19:45" },
            { time: "19:45", artist: "BLK ODYSSY", duration: "01:30", endTime: "21:15" },
            { time: "21:15", artist: "SJAVA", duration: "01:30", endTime: "22:45" },
            { time: "22:30", artist: "MICK JENKINS", duration: "01:00", endTime: "23:30" },
            { time: "00:00", artist: "6LACK", duration: "02:00", endTime: "02:00" }
        ],
        filterValue: "main"
    },
    {
        stage: "Beach Club",
        day: "Friday",
        performances: [
            { time: "10:00", artist: "D'PHAULT", duration: "01:00", endTime: "11:00" },
            { time: "11:00", artist: "SLOW POISON", duration: "01:00", endTime: "12:00" },
            { time: "12:00", artist: "WORKAHOLICS", duration: "01:00", endTime: "13:00" },
            { time: "13:00", artist: "BEATSBYHAND", duration: "01:00", endTime: "14:00" },
            { time: "14:00", artist: "WAN.ILLA NICE", duration: "01:00", endTime: "15:00" },
            { time: "15:00", artist: "GREMLIN", duration: "01:00", endTime: "16:00" },
            { time: "16:00", artist: "TENOCEANS", duration: "01:00", endTime: "17:00" },
            { time: "17:00", artist: "DARQUE", duration: "01:00", endTime: "18:00" },
            { time: "18:00", artist: "DWSON", duration: "01:00", endTime: "19:00" },
            { time: "19:00", artist: "SUN EL MUSICIAN", duration: "01:00", endTime: "20:00" }
        ],
        filterValue: "beach"
    },
    {
        stage: "Beach Club",
        day: "Saturday",
        performances: [
            { time: "10:00", artist: "MEEK", duration: "01:00", endTime: "11:00" },
            { time: "11:00", artist: "FIZZ & SHAI-A", duration: "01:00", endTime: "12:00" },
            { time: "12:00", artist: "KAT UPENDI", duration: "01:00", endTime: "13:00" },
            { time: "13:00", artist: "FOREPLAY", duration: "01:00", endTime: "14:00" },
            { time: "14:00", artist: "ASVANTE", duration: "01:00", endTime: "15:00" },
            { time: "15:00", artist: "AKIO", duration: "01:00", endTime: "16:00" },
            { time: "16:00", artist: "PARAVANE", duration: "01:00", endTime: "17:00" },
            { time: "17:00", artist: "KYOTIC", duration: "01:00", endTime: "18:00" },
            { time: "18:00", artist: "WBONK", duration: "01:00", endTime: "19:00" },
            { time: "19:00", artist: "OSCAR MBO", duration: "01:00", endTime: "20:00" }
        ],
        filterValue: "beach"
    },
    {
        stage: "Beach Club",
        day: "Sunday",
        performances: [
            { time: "10:00", artist: "SENHORA", duration: "01:00", endTime: "11:00" },
            { time: "11:00", artist: "ENRICO CELETO", duration: "01:00", endTime: "12:00" },
            { time: "12:00", artist: "FIFLAAA", duration: "01:00", endTime: "13:00" },
            { time: "13:00", artist: "STOKIE", duration: "01:00", endTime: "14:00" },
            { time: "14:00", artist: "CLINT L", duration: "01:00", endTime: "15:00" },
            { time: "15:00", artist: "DJ KENT", duration: "01:00", endTime: "16:00" }
        ],
        filterValue: "beach"
    },
    {
        stage: "Maybelline",
        day: "Friday",
        performances: [
            { time: "19:00", artist: "BLAQKONGO", duration: "01:00", endTime: "20:00" },
            { time: "20:00", artist: "ROZ", duration: "01:00", endTime: "21:00" },
            { time: "21:00", artist: "ATMOS BLAQ", duration: "01:00", endTime: "22:00" },
            { time: "22:00", artist: "CULOE DE SONG", duration: "01:00", endTime: "23:00" },
            { time: "23:00", artist: "PRINCE KAY BEE", duration: "01:00", endTime: "00:00" },
            { time: "00:00", artist: "PONA COLADA", duration: "01:00", endTime: "01:00" },
            { time: "01:00", artist: "BUN XAPA", duration: "01:00", endTime: "02:00" },
            { time: "02:00", artist: "OMAGOQA", duration: "01:00", endTime: "03:00" },
            { time: "03:00", artist: "QUE DJ", duration: "01:00", endTime: "04:00" }
        ],
        filterValue: "maybelline"
    },
    {
        stage: "Maybelline",
        day: "Saturday",
        performances: [
            { time: "19:00", artist: "MILA ROSE", duration: "01:00", endTime: "20:00" },
            { time: "20:00", artist: "TRISTAN URWIN", duration: "01:00", endTime: "21:00" },
            { time: "21:00", artist: "LEMON 2 HERB", duration: "01:00", endTime: "22:00" },
            { time: "23:00", artist: "FELO LE TEE", duration: "01:00", endTime: "00:00" },
            { time: "00:00", artist: "KMAT", duration: "01:00", endTime: "01:00" },
            { time: "01:00", artist: "SURREAL SESSIONS", duration: "01:00", endTime: "02:00" },
            { time: "02:00", artist: "DJ LAG", duration: "01:00", endTime: "03:00" },
            { time: "03:00", artist: "MELLOW 2 SLEAZY", duration: "01:00", endTime: "04:00" }
        ],
        filterValue: "maybelline"
    },
    {
        stage: "Night Under the Stars",
        day: "Thursday",
        performances: [
            { time: "15:00", artist: "D'PHAULT", duration: "01:00", endTime: "16:00" },
            { time: "16:00", artist: "WANDILE MBAMBENI", duration: "01:00", endTime: "17:00" },
            { time: "17:00", artist: "MARS BABY", duration: "01:15", endTime: "18:15" },
            { time: "18:15", artist: "MATTHEW MOLE", duration: "01:30", endTime: "19:45" },
            { time: "19:45", artist: "JOY OLADOKUN", duration: "01:30", endTime: "21:15" },
            { time: "21:15", artist: "KASH CPT", duration: "01:00", endTime: "22:15" },
            { time: "22:15", artist: "ZEE NXUMALO", duration: "01:00", endTime: "23:15" },
            { time: "23:15", artist: "MI CASA", duration: "01:15", endTime: "00:30" },
            { time: "00:30", artist: "BOOHLE", duration: "01:30", endTime: "02:00" },
            { time: "02:00", artist: "MUSA KEYS", duration: "02:00", endTime: "04:00" }
        ],
        filterValue: "night"
    },
    {
        stage: "Beach Club Afterparty",
        day: "Friday",
        performances: [
            { time: "01:00", artist: "FISH PARCEL", duration: "01:00", endTime: "02:00" },
            { time: "02:00", artist: "DJ SLIQUE", duration: "01:00", endTime: "03:00" },
            { time: "03:00", artist: "FINESSA WILLIAMS", duration: "01:00", endTime: "04:00" }
        ],
        filterValue: "afterparty"
    },
    {
        stage: "Beach Club Afterparty",
        day: "Saturday",
        performances: [
            { time: "01:00", artist: "NOTBENJAMIN", duration: "01:00", endTime: "02:00" },
            { time: "02:00", artist: "RARRI", duration: "01:00", endTime: "03:00" },
            { time: "03:00", artist: "JUSTTRAVISCPT", duration: "01:00", endTime: "04:00" }
        ],
        filterValue: "afterparty"
    }
];