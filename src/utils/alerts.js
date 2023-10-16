import Swal from 'sweetalert2';

export const sweetAlert = (icon, title, timer = 1500) => {
  Swal.fire({
    position: 'center',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: timer,
  });
};
