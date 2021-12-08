import Header from './Header/Header';
import {app} from './Layout.module.css'

function Layout({children, cls}) {
  return (
    <div className={[app,cls].join(' ')}>
      <div><Header /></div>
      {children}
    </div>
  );
}

export default Layout;
