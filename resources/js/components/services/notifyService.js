import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyService = {
    Notifications : Object.freeze({
        Success : 1,
        Failure : 2,
        Warnning: 3,
        Info : 4
    }),

    notify: function(msg, notifyType){
        switch(notifyType){
            case this.Notifications.Success:
                toast.success(msg);
                break;
            case this.Notifications.Failure:
                toast.error(msg);
                break;
            case this.Notifications.Warnning:
                toast.warning(msg);
                break;
            case this.Notifications.Info:
                toast.info(msg);
                break;
        }
    }
}

export default notifyService;
