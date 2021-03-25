import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
	stepper: {
		padding: theme.spacing(5, 0, 8),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative',
	},
	buttonProgress: {
		position: 'absolute',
		top: '50%',
		left: '50%',
	},
}));
