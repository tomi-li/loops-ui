/**
 * All Codes below are Lifetime Warranted by Tomi since 22/03/2017.
 */
import Button from './Button';
import Card from './Card';
import Section from './Section';
import TopNavigation from './TopNavigation';
import Widget from './Widget';
import Spinner from './Spinner';
import Page from './Page';
import Circle from './Circle';

const components = [
  Button,
  Card,
  Section,
  TopNavigation,
  Widget,
  Spinner,
  Page,
  Circle,
];


const install = (Vue) => {
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => Vue.component(component.name, component));

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;
};
