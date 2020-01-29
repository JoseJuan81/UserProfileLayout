import UserProfileLayout from './components/UserProfileLayout.vue';

export function install(Vue) {
	if (install.intalled) return;
	install.installed = true;
	Vue.component('user-profile-layout', UserProfileLayout);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default UserProfileLayout;
