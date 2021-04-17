import { createRef, FC, useEffect, useState } from "react";
import loadscript from 'load-script';
import { DraggableChildProps } from "../dnd/draggable";


declare global {
    interface Window {
        SC: any;
    }
}

const ALCHEMIST_RADIO_URL = 'https://soundcloud.com/alchemist-coin-radio/sets/alchemist-radio';

const SoundCloud: FC<DraggableChildProps> = ({ minimized }) => {
    const iframeRef = createRef<HTMLIFrameElement>();
    const [player, setPlayer] = useState<any>(null);
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        loadscript('https://w.soundcloud.com/player/api.js', () => {
            const player = window.SC.Widget(iframeRef.current);
            setPlayer(player);
            const { PLAY, PLAY_PROGRESS: _pp, PAUSE, FINISH: _f, ERROR: _err } = window.SC.Widget.Events;

            player.bind(PLAY, () => {
                setPlaying(true);
                player.getCurrentSoundIndex(soundIndex => setIndex(soundIndex));
            });

            player.bind(PAUSE, () => player.isPaused(isPaused => setPlaying(!isPaused)));
        });
    }, []);

    useEffect(() => {
        if (!player) return;

        player.getCurrentSoundIndex(soundIndex => {
            if (soundIndex !== index) player.skip(index);
        });

    }, [index]);


    const togglePlayback = () => setPlaying(!playing);

    const changeIndex = (skipForward = true)  => {
        player.getSounds((songList) => {
            const next = skipForward ? index +1 : index -1;
            setIndex(next % (songList.length - 1));
        });
    }

    const controls = [
        <button onClick={() => changeIndex(false)}>{'<'}</button>,
        <button onClick={togglePlayback}>{playing ? 'Pause': 'Play'}</button>,
        <button onClick={() => changeIndex(true)}>{'>'}</button>
    ];

    return (
        <div style={{ display: minimized ? 'none' : 'block'}}>
            <iframe {...{
                ref: iframeRef,
                allow: 'autoplay',
                style: { border: 'none', width: 300, height: 400 },
                src: `https://w.soundcloud.com/player/?url=${ALCHEMIST_RADIO_URL}`,
            }} />

            {/* {controls} */}
        </div>
    )
};


export default SoundCloud;