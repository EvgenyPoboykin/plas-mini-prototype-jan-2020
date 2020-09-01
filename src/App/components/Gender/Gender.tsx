import React, { memo, useContext } from 'react';
import CheckboxMiddle from '../CheckboxMiddle';
import { ContextApp } from '../../state';

const Gender: React.FC = memo(() => {
    const { lang } = useContext(ContextApp);
    return <CheckboxMiddle block={true} firstTitle={lang.male} secondTitle={lang.female} field='gender' />;
});
export default Gender;
