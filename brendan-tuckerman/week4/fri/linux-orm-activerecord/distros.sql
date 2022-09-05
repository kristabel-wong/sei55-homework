--First we create the DB
-- Then we add some seed data

DROP TABLE IF EXISTS distros; 

CREATE TABLE distros (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    --this will add a new id for each entry
    name TEXT,
    family_id INTEGER,
    description TEXT,
    latest_version TEXT,
    is_current BOOLEAN,
    release_date TEXT,
    logo_url TEXT,
    screenshot_url TEXT,
    website TEXT

);

INSERT INTO distros (name, family_id, description, latest_version, is_current, release_date, logo_url, screenshot_url, website)
    VALUES (
        "Fedora",
        1,
        "Community-supported Linux distribution sponsored by Red Hat. ",
        "36",
        1,
        "2003-11-06",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fedora_logo_%282021%29.svg/250px-Fedora_logo_%282021%29.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Fedora_Workstation_36_showing_GNOME_Shell_42.png/300px-Fedora_Workstation_36_showing_GNOME_Shell_42.png",
        "getfedora.org"


    );

    INSERT INTO distros (name, family_id, description, latest_version, is_current, release_date, logo_url, screenshot_url, website)
    VALUES (
        "HandyLinux",
        2,
        "Designed for senior citizens running old computers for which Windows has become too slow. ",
        "3.6",
        0,
        "2013-11-01",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/HandyLinux-logo_circle.png/90px-HandyLinux-logo_circle.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Handymenu4-desktop-en.png/280px-Handymenu4-desktop-en.png",
        "handylinux.org" 

    );


    INSERT INTO distros (name, family_id, description, latest_version, is_current, release_date, logo_url, screenshot_url, website)
    VALUES (
        "CentOS",
        1,
        "Community-supported Linux distribution designed as an OpenSource version of RHEL and well suited for servers. Now sponsored by Red Hat. ",
        "2.4.5",
        1,
        "2004-14-05",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Centos-logo-light.svg/300px-Centos-logo-light.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/CentOS_Stream_9_Workstation_showing_GNOME_Shell_40.png/300px-CentOS_Stream_9_Workstation_showing_GNOME_Shell_40.png",
        "centos.org" 

    );