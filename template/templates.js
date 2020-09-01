const index = (name) => {
    return [`import ${name} from './${name}';`, `export default ${name};`].join('\n');
};

const component = (name, logic, format) => {
    return [`import React, { memo } from 'react';`, logic === 'l' ? `import ${name}_Logic from './logic';` : null, `import { Container } from './style';`, '', `const ${name}${format === 'tsx' ? ': React.FC' : ''} = memo(() => {`, logic === 'l' ? `    const [] = ${name}_Logic();` : null, `    return <Container></Container>;`, `});`, `export default ${name};`].join('\n');
};

const style = (name) => {
    return [`import styled from 'styled-components';`, '', 'export const Container = styled.div.attrs({ className: "' + name + '__container" })' + '``;'].join('\n');
};

const logic = (name) => {
    return [`import { useCallback } from 'react';`, '', `const ${name}_Logic = () => {`, '   ', '   // Logic ${name} START', '', '    // Logic ${name} END', '', '    return [];', '};', '', `export default ${name}_Logic;`].join('\n');
};

module.exports = { index, component, style, logic };
