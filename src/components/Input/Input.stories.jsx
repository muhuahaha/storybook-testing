import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Small = () => (
  <Input variant="emailInput" size="small" placeholder="Small size" />
);
export const Medium = () => (
  <Input variant="emailInput" size="medium" placeholder="Medium size" />
);
export const Large = () => (
  <Input variant="emailInput" size="large" placeholder="Large size" />
);
