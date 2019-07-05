import DatePicker from './components/datePicker/Date.vue'
import Toggle from './components/toggle/UserSettingsForm.vue'
import Modal from './components/modal/Modal.vue'

export const routes = [
	{path: '/datePicker', component: DatePicker},
	{path: '/toggle', component: Toggle},
	{path: '/modal', component: Modal}
];