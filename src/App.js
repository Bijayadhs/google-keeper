import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import LeftMenu from './components/LeftMenu';
import MainNotes from './components/MainNotes';

function App() {
  return (
    <div className="overflow-y-auto flex flex-col">
        <Navbar />
        <div className="flex">     
          <LeftMenu />
          <MainNotes/>   
        </div>  

    </div>
  );
}

export default App;


// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import GridOnIcon from '@material-ui/icons/GridOn';
// import AppsIcon from '@material-ui/icons/Apps';
// import LabelIcon from '@material-ui/icons/Label';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import ArchiveIcon from '@material-ui/icons/Archive';
// import DeleteIcon from '@material-ui/icons/Delete';
// import ListIcon from '@material-ui/icons/List';
// import ImageIcon from '@material-ui/icons/Image';
// import LanguageIcon from '@material-ui/icons/Language';
// import TvIcon from '@material-ui/icons/Tv';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import SettingsIcon from '@material-ui/icons/Settings';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import PinDropIcon from '@material-ui/icons/PinDrop';
// import BrushIcon from '@material-ui/icons/Brush';
// import AddAlertIcon from '@material-ui/icons/AddAlert';
// import GroupAddIcon from '@material-ui/icons/GroupAdd';
// import ColorLensIcon from '@material-ui/icons/ColorLens';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import HistoryIcon from '@material-ui/icons/History';
// import UpdateIcon from '@material-ui/icons/Update';
// import CloseIcon from '@material-ui/icons/Close';
// import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
