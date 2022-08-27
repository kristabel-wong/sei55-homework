-- This file will create
-- 1. the structure of the 'clip_ranker' data table 
-- 2. several rows of 'seed'/test data to work with, i.e. several specific pets

-- By doing this in one file, we only need to run one sqlite3 command 
-- to re-initialise (restart) the whole database if we need to

-- this will nuke (delete) the pets table so we don't even have to 
-- run 'rm database.db' before loading this pets.sql file

DROP TABLE IF EXISTS clip_ranker;

CREATE TABLE clip_ranker (

    id INTEGER PRIMARY KEY AUTOINCREMENT, -- id will be auto-calculated
    title TEXT,
    clipped_by TEXT,
    channel TEXT,
    channel_home TEXT,
    category TEXT, 
    seconds_length INTEGER,
    ranker_view_count INTEGER,
    source_view_count INTEGER,
    date_made INTEGER,
    video_source_url TEXT,
    clip_official_url TEXT

);

INSERT INTO clip_ranker ( title, clipped_by, channel, channel_home, category, seconds_length, ranker_view_count, source_view_count, date_made, video_source_url, clip_official_url )
    VALUES (
        'Varksen is a teenage girl apparently',
        'ElleShaped',
        'shAeDHD',
        'Twitch',
        'Blood Bowl 2',
        6,
        0,
        3,
        14112020,
        "/videos/wat_eva_maja_loser_1.webm",
        "https://clips.twitch.tv/FrailPleasantAlmondThisIsSparta"

    );

INSERT INTO clip_ranker ( title, clipped_by, channel, channel_home, category, seconds_length, ranker_view_count, source_view_count, date_made, video_source_url, clip_official_url )
    VALUES (
        'progress shot :D',
        'MyMateMick',
        'shAeDHD',
        'Twitch',
        'Oxygen Not Included',
        25,
        0,
        20,
        19112020,
        "/videos/movember_progress_1.webm",
        "https://clips.twitch.tv/TsundereAdorablePineappleSoonerLater"


    );

INSERT INTO clip_ranker ( title, clipped_by, channel, channel_home, category, seconds_length, ranker_view_count, source_view_count, date_made, video_source_url, clip_official_url )
    VALUES (
        'What do you think of Astarion? - Shae, 2021',
        'shAeDHD',
        'shAeDHD',
        'Twitch',
        'Just Chatting',
        25,
        0,
        16,
        10102020,
        "/videos/baldurs_gate_3_1.webm",
        "https://clips.twitch.tv/BoldSavoryScallionThunBeast"

    );

INSERT INTO clip_ranker ( title, clipped_by, channel, channel_home, category, seconds_length, ranker_view_count, source_view_count, date_made, video_source_url, clip_official_url )
    VALUES (
        'Flex on Mikkel',
        'de_mikkel',
        'shAeDHD',
        'Twitch',
        'Hunt: Showdown',
        20,
        0,
        17,
        13052021,
        "/videos/flex_on_mikkel_1.webm",
        "https://clips.twitch.tv/BlueExcitedNikudonHoneyBadger-CkvnCd_VJaxNqemW"

    );


