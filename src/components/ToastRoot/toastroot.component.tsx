import { Toast } from 'components/Toast/toast.component';
import { ToastContainerWrapper } from 'components/ToastContainer/styled';
import { ToastPortal } from 'components/ToastPortal/toastportal.component';

import { getPosition } from '@utils';
import { useToastService } from '@hooks';
import { defaultToastConfig } from '@constants';
import type { ToastContainerProps } from '@interfaces';

export const ToastRoot = ({ position, margins, ...toastContainerConfig }: ToastContainerProps): JSX.Element => {
	const [toasts, removeToast] = useToastService(toastContainerConfig);

	const handleRemoveToast = (id: string) => (): void => {
		removeToast(id);
	};

	return (
		<ToastPortal>
			{toasts.length > 0 && (
				<ToastContainerWrapper position={getPosition(position)} margins={margins}>
					{toasts.slice(0, 3).map(({ id, toastConfig }) => (
						<Toast
							position={position}
							remove={handleRemoveToast(id)}
							config={{
								...defaultToastConfig,
								...toastContainerConfig,
								...toastConfig,
							}}
							key={id}
						/>
					))}
				</ToastContainerWrapper>
			)}
		</ToastPortal>
	);
};
