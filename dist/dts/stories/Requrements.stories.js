import { jsx as _jsx } from "react/jsx-runtime";
import { storiesOf } from '@storybook/react';
import { Greeting } from '../components/Greeting/Greeting';
var stories = storiesOf('App test', module);
stories.add('App', function () {
    return _jsx(Greeting, {});
});
