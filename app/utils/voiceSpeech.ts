import { Audio } from 'expo-av'
import { Alert } from 'react-native'

export async function voiceSpeech(soundLink: string | undefined) {
	if (!soundLink) return
	Audio.Sound.createAsync({
		uri: soundLink,
	})
		.then(async ({ sound }) => {
			await sound.playAsync()
		})
		.catch((error) => Alert.alert(error.message))
}
