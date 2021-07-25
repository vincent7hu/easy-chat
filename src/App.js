import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = 'dc1c7651-14bb-4a65-b66f-4251bce2bd2b';

export function App() {
	if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height="100vh"
			projectID={projectID}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
	);
}

export default App;