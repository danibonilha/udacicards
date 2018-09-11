import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'UdaciCards:notifications';

export const clearLocalNotification = () => (AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationAsync));

const createNotification = () => ({
	title: 'Hi, there!',
	body: ' 🤓 don\'t forget to study today!',
	ios: {
		sound: true,
	},
	android: {
		sound: true,
		priority: 'high',
		sticky: false,
		vibrate: true,
	}
}
);

export const setLocalNotification = () => {
	console.log('setlocationbeforestorafe');
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then((data) => console.log(data))
		.then((data) => {
			console.log('data', data);
			if (data === null) {
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({ status }) => {
						console.log('status', status);
						if (status === 'granted') {
							Notifications.cancelAllScheduledNotificationsAsync();

							let tomorrow = new Date();
							console.log('todar', tomorrow);
							tomorrow.setDate(tomorrow.getDate());
							console.log('setDate', tomorrow);
							tomorrow.setHours(17);
							tomorrow.setMinutes(38);
							console.log(tomorrow);

							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								{
									time: tomorrow,
									repeat: 'day',
								}
							);

							AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
							console.log('setNotification');
						}
					});
			}
		});
};