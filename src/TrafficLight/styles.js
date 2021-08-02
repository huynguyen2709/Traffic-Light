import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    red: {
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        borderRadius: '30px',
        opacity: 0.5,
        marginBottom: '8px',
    },

    yellow: {
        width: '50px',
        height: '50px',
        backgroundColor: 'yellow',
        borderRadius: '30px',
        opacity: 0.5,
        marginBottom: '8px',
    },

    green: {
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
        opacity: 0.5,
        borderRadius: '30px',
        marginBottom: '8px',
    },

    active: {
        opacity: 1,
    },
}));