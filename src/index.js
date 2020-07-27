import UserProfileLayout from './components/user-profile-layout.vue';

const install = function install(Vue) {
	if (install.intalled) return;
	install.installed = true;
	Vue.component(UserProfileLayout.name, UserProfileLayout);
};

UserProfileLayout.install = install;

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
