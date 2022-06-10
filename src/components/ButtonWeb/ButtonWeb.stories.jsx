import ButtonWeb from './ButtonWeb';

export default {
  title: 'Components/Button',
  component: ButtonWeb,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <ButtonWeb {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
  color: 'white',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md',
  color: 'white',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'lg',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'red',
  label: 'Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd',
  size: 'md',
  color: 'white',
};
