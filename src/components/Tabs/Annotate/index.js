import React, { useContext } from 'react';
import { OPERATIONS } from './Annotate.constants';
import Topbar from '../../Topbar';
import Context from '../../../context';
import * as OperationsComopnents from './Operations';

const Annotate = () => {
  const { subTab } = useContext(Context);

  return (
    <Topbar tabsComponents={OperationsComopnents} tabs={OPERATIONS} tab={subTab} hideTabs={false} />
  )
}

export default Annotate;