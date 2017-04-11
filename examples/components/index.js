/**
 * All Codes below are Lifetime Warranted by Tomi since 24/03/2017.
 */
import CodeBlock from './CodeBlock.vue';
import DemoSection from './DemoSection.vue';

const componentsObject = {
  CodeBlock,
  DemoSection,
};

// make object to array for register.
const componentsArray = [];
Object.keys(componentsObject).forEach(key => componentsArray.push(componentsObject[key]));

export { componentsArray };
export default componentsObject;

