import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { Video } from 'expo-av'

import styles from './styles'
import {Episode} from "../../types"

interface VideoPlayerProps { episode: Episode }
const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const video = useRef(null);

    const [status, setStatus] = useState({})
    return (
        <View>
            <Video 
                ref={video}
                style={styles.video}
                source={{ uri: episode.video }}
                posterSource={{uri: episode.poster}}
                usePoster={true}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    )
}

export default VideoPlayer