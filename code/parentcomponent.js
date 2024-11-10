import React from 'react';
import ChildComponent from './ChildComponent';
function ParentComponent() {
return (
<div>
<ChildComponent message="This is a message from the
parent!" />
</div>
);
}
export default ParentComponent;