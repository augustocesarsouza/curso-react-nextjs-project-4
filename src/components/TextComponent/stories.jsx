import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolorem illum ab recusandae voluptas saepe officiis, animi officia assumenda velit
    eveniet possimus est labore omnis. Tenetur dolores perspiciatis error molestiae deleniti.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
