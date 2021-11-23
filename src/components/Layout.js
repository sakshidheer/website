import Header from './Header/Header';
import {app} from './Layout.module.css'

function Layout({children}) {
  return (
    <div className={app}>
      <div><Header /></div>
      {children}
    </div>
  );
}

export default Layout;
