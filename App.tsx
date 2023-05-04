import { LogBox } from 'react-native'
// import StoryContainer from './app/components/screens/home/stories/StoryContainer'
// import Navigation from './app/navigation/Navigation'
import { AuthProvider } from './app/providers/AuthProvider'
import Navigation from './app/navigation/Navigation'
// import { DataProvider } from './app/providers/DataProvider'

export default function App() {
	return (
		<AuthProvider>
			<Navigation />
		</AuthProvider>
	)
}

LogBox.ignoreAllLogs()
