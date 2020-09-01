import React, { memo, useContext } from 'react';
import CheckboxMiddle from '../CheckboxMiddle';
import { ContextApp } from '../../state';

const Equipped: React.FC = memo(() => {
    const { lang, state } = useContext(ContextApp);
    return <CheckboxMiddle block={state.selectFormula === 'IPF Classic' || state.selectFormula === 'IPF Classic Bench' ? true : false} firstTitle={lang.equipped} secondTitle={lang.no_equipped} field='equipped' />;
});
export default Equipped;
