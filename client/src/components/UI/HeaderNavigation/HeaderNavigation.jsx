import styles from './HeaderNavigation.module.scss'

import Link from 'next/link'

const HeaderNavigation = ({title, mail, icon, tarif}) => {
  return ( 
    <div className={styles.headerNav}>
      <div className={styles.headerNav__user}>
          <div className={styles.headerNav__icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.099 7.86369C21.7328 5.76227 24.6667 4.02084 27.4509 2.91051L27.451 2.91048C30.3736 1.74496 32.9528 1.34611 34.7534 1.78116C36.5544 2.21622 37.4669 3.45854 37.3373 5.29877V5.29887C37.2076 7.13913 36.044 9.46485 34.0421 11.8841V11.8841C32.0403 14.3034 29.3227 16.6682 26.3475 18.5801C23.3722 20.492 20.3212 21.8342 17.7084 22.3803H17.7083C15.0957 22.9264 13.081 22.6432 12.0039 21.5783C11.0046 20.5903 10.8691 18.9856 11.6071 17.0038C11.6646 16.8496 11.7273 16.6931 11.7953 16.5345V16.5344V16.5343H11.7952V16.5344C11.7272 16.693 11.6645 16.8495 11.6071 17.0038C10.8689 18.9856 11.0045 20.5904 12.0038 21.5784C13.0809 22.6433 15.0956 22.9265 17.7084 22.3804H17.7084C20.3212 21.8342 23.3722 20.4921 26.3475 18.5802C29.3227 16.6683 32.0403 14.3034 34.0421 11.8842V11.8841C36.044 9.46491 37.2079 7.13916 37.3373 5.29887V5.29877C37.4669 3.45848 36.5544 2.21611 34.7537 1.78106L34.7534 1.78104C32.9528 1.34601 30.3736 1.74488 27.451 2.91041L27.4509 2.91044C24.6667 4.02077 21.7327 5.76221 19.099 7.86366C18.9681 7.96812 18.8379 8.07347 18.7085 8.17966L18.7084 8.17975V8.17979C18.8378 8.07356 18.9681 7.96818 19.099 7.86369ZM18.3898 7.79156C21.1571 5.51999 24.2887 3.63081 27.2649 2.44393C30.2237 1.26398 32.9208 0.821601 34.8715 1.29288C35.8598 1.53166 36.6521 2.00484 37.1741 2.71565C37.6964 3.42667 37.9095 4.32262 37.8383 5.33408C37.6979 7.32964 36.4558 9.75513 34.429 12.2043C32.3903 14.6681 29.6324 17.0663 26.619 19.0027C23.608 20.9376 20.4999 22.31 17.8111 22.872C15.1575 23.4267 12.916 23.1865 11.6507 21.9355C10.3495 20.6491 10.3638 18.5989 11.3336 16.3365C11.3883 16.2091 11.4939 16.1083 11.6274 16.061C12.0629 15.9066 12.4199 16.3521 12.2569 16.7323C11.3425 18.8654 11.5041 20.3779 12.357 21.2212C13.2459 22.1 15.0338 22.4263 17.6057 21.8887C20.1424 21.3585 23.1365 20.0466 26.076 18.1576C29.0131 16.2702 31.6902 13.9387 33.6553 11.564C35.6322 9.1746 36.7176 6.94863 36.8363 5.26359C36.8947 4.43472 36.7163 3.78933 36.3645 3.31034C36.0126 2.83112 35.448 2.46561 34.6356 2.26933C32.9847 1.87052 30.5236 2.22585 27.637 3.377C24.7678 4.52119 21.7242 6.35397 19.0271 8.56798C18.8547 8.70955 18.6048 8.72257 18.417 8.58883C18.1478 8.39705 18.1339 8.00161 18.3898 7.79156Z" fill="#242424"/>
              <path d="M11.2216 3.4588C12.1767 3.4588 12.951 2.68452 12.951 1.7294C12.951 0.774279 12.1767 0 11.2216 0C10.2665 0 9.49219 0.774279 9.49219 1.7294C9.49219 2.68452 10.2665 3.4588 11.2216 3.4588Z" fill="#00398E"/>
              <path d="M15.8198 6.20105C16.3556 6.20105 16.7899 5.76669 16.7899 5.23089C16.7899 4.69509 16.3556 4.26074 15.8198 4.26074C15.284 4.26074 14.8496 4.69509 14.8496 5.23089C14.8496 5.76669 15.284 6.20105 15.8198 6.20105Z" fill="#2469CF"/>
              <path d="M12.3164 9.42902C12.3164 9.14946 12.543 8.92285 12.8226 8.92285C13.1021 8.92285 13.3287 9.14946 13.3287 9.42902V14.8281C13.3287 15.1077 13.1021 15.3343 12.8226 15.3343C12.543 15.3343 12.3164 15.1077 12.3164 14.8281V9.42902Z" fill="#242424"/>
              <path d="M12.8226 15.3346C12.543 15.3346 12.3164 15.108 12.3164 14.8284C12.3164 14.5489 12.543 14.3223 12.8226 14.3223H20.7525C21.0321 14.3223 21.2587 14.5489 21.2587 14.8284C21.2587 15.108 21.0321 15.3346 20.7525 15.3346H12.8226Z" fill="#242424"/>
              <path d="M25.6461 9.42902C25.6461 9.14947 25.4195 8.92285 25.14 8.92285C24.8604 8.92285 24.6338 9.14947 24.6338 9.42902V14.8281C24.6338 15.1077 24.8604 15.3343 25.14 15.3343C25.4195 15.3343 25.6461 15.1077 25.6461 14.8281V9.42902Z" fill="#242424"/>
              <path d="M33.5758 9.42902C33.5758 9.14947 33.3492 8.92285 33.0696 8.92285C32.7901 8.92285 32.5635 9.14947 32.5635 9.42902V10.1883C32.5635 10.4678 32.7901 10.6944 33.0696 10.6944C33.3492 10.6944 33.5758 10.4678 33.5758 10.1883V9.42902Z" fill="#242424"/>
              <path d="M25.14 8.92321C24.8604 8.92321 24.6338 9.14983 24.6338 9.42938C24.6338 9.70893 24.8604 9.93555 25.14 9.93555H33.0699C33.3494 9.93555 33.576 9.70893 33.576 9.42938C33.576 9.14983 33.3494 8.92321 33.0699 8.92321H25.14Z" fill="#242424"/>
              <path d="M25.14 14.3217C24.8604 14.3217 24.6338 14.5483 24.6338 14.8278C24.6338 15.1074 24.8604 15.334 25.14 15.334H28.1769C28.4565 15.334 28.6831 15.1074 28.6831 14.8278C28.6831 14.5483 28.4565 14.3217 28.1769 14.3217H25.14Z" fill="#242424"/>
              <path d="M0 9.42902C0 9.14946 0.226618 8.92285 0.506166 8.92285C0.785714 8.92285 1.01233 9.14946 1.01233 9.42902V14.8281C1.01233 15.1077 0.785714 15.3343 0.506166 15.3343C0.226618 15.3343 0 15.1077 0 14.8281V9.42902Z" fill="#242424"/>
              <path d="M0.506166 15.3346C0.226618 15.3346 0 15.108 0 14.8284C0 14.5489 0.226618 14.3223 0.506166 14.3223H8.43609C8.71566 14.3223 8.94226 14.5489 8.94226 14.8284C8.94226 15.108 8.71566 15.3346 8.43609 15.3346H0.506166Z" fill="#242424"/>
              <path d="M0.506166 9.93516C0.226618 9.93516 0 9.70856 0 9.42902C0 9.14946 0.226618 8.92285 0.506166 8.92285H8.43609C8.71566 8.92285 8.94226 9.14946 8.94226 9.42902C8.94226 9.70856 8.71566 9.93516 8.43609 9.93516H0.506166Z" fill="#242424"/>
              <path d="M5.65263 13.2252C5.37309 13.2252 5.14648 12.9986 5.14648 12.719C5.14648 12.4395 5.37309 12.2129 5.65263 12.2129H8.43654C8.71611 12.2129 8.94271 12.4395 8.94271 12.719C8.94271 12.9986 8.71611 13.2252 8.43654 13.2252H5.65263Z" fill="#242424"/>
              <path d="M7.92969 12.719C7.92969 12.4395 8.15632 12.2129 8.43586 12.2129C8.71543 12.2129 8.94203 12.4395 8.94203 12.719V14.8281C8.94203 15.1076 8.71543 15.3342 8.43586 15.3342C8.15632 15.3342 7.92969 15.1076 7.92969 14.8281V12.719Z" fill="#242424"/>
              <path d="M7.92969 9.42902C7.92969 9.14946 8.15632 8.92285 8.43586 8.92285C8.71543 8.92285 8.94203 9.14946 8.94203 9.42902V10.6101C8.94203 10.8896 8.71543 11.1162 8.43586 11.1162C8.15632 11.1162 7.92969 10.8896 7.92969 10.6101V9.42902Z" fill="#242424"/>
            </svg>
          </div>
          <div className={styles.headerNav__info}>
          <div className={styles.headerNav__name}>
            <span className={styles.headerNav__nameTitle}>{title}</span>
            <span className={styles.headerNav__nameTarif}>
              {tarif == 'Pro' ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14" fill="none">
                <rect width="28" height="14" rx="3" fill="url(#paint0_linear_991_41200)"/>
                <path d="M8.36991 7.83824H6.81923V6.89973H8.36991C8.60954 6.89973 8.8046 6.8623 8.95507 6.78743C9.10554 6.70989 9.2156 6.60294 9.28527 6.46658C9.35493 6.33021 9.38976 6.17647 9.38976 6.00535C9.38976 5.83155 9.35493 5.66979 9.28527 5.52005C9.2156 5.37032 9.10554 5.25 8.95507 5.15909C8.8046 5.06818 8.60954 5.02273 8.36991 5.02273H7.25392V9.91979H6V4.08021H8.36991C8.8464 4.08021 9.25462 4.1631 9.59457 4.32888C9.9373 4.49198 10.1992 4.71791 10.3804 5.00668C10.5615 5.29545 10.652 5.62567 10.652 5.99733C10.652 6.37433 10.5615 6.70053 10.3804 6.97594C10.1992 7.25134 9.9373 7.4639 9.59457 7.61364C9.25462 7.76337 8.8464 7.83824 8.36991 7.83824Z" fill="#F5F5F5"/>
                <path d="M11.5172 4.08021H13.7868C14.2522 4.08021 14.652 4.14706 14.9864 4.28075C15.3236 4.41444 15.5827 4.6123 15.7638 4.87433C15.945 5.13636 16.0355 5.45856 16.0355 5.84091C16.0355 6.15374 15.9798 6.42246 15.8683 6.64706C15.7597 6.86898 15.605 7.05481 15.4044 7.20455C15.2065 7.3516 14.9739 7.46925 14.7064 7.55749L14.3093 7.75802H12.3365L12.3281 6.81952H13.7952C14.0153 6.81952 14.1978 6.78209 14.3427 6.70722C14.4876 6.63235 14.5963 6.52807 14.6688 6.39438C14.744 6.2607 14.7816 6.10561 14.7816 5.92914C14.7816 5.74198 14.7454 5.58021 14.6729 5.44385C14.6005 5.30749 14.4904 5.20321 14.3427 5.13102C14.1951 5.05882 14.0098 5.02273 13.7868 5.02273H12.7712V9.91979H11.5172V4.08021ZM14.9195 9.91979L13.5319 7.31684L14.8568 7.30882L16.2612 9.86364V9.91979H14.9195Z" fill="#F5F5F5"/>
                <path d="M22 6.86364V7.14037C22 7.58422 21.9373 7.98262 21.8119 8.33556C21.6865 8.6885 21.5096 8.9893 21.2811 9.23797C21.0526 9.48396 20.7795 9.67246 20.4619 9.80348C20.147 9.93449 19.7973 10 19.4127 10C19.031 10 18.6813 9.93449 18.3636 9.80348C18.0488 9.67246 17.7757 9.48396 17.5444 9.23797C17.3131 8.9893 17.1334 8.6885 17.0052 8.33556C16.8798 7.98262 16.8171 7.58422 16.8171 7.14037V6.86364C16.8171 6.41711 16.8798 6.01872 17.0052 5.66845C17.1306 5.31551 17.3076 5.01471 17.536 4.76604C17.7673 4.51738 18.0404 4.32754 18.3553 4.19652C18.6729 4.06551 19.0226 4 19.4044 4C19.7889 4 20.1386 4.06551 20.4535 4.19652C20.7712 4.32754 21.0442 4.51738 21.2727 4.76604C21.504 5.01471 21.6823 5.31551 21.8077 5.66845C21.9359 6.01872 22 6.41711 22 6.86364ZM20.7335 7.14037V6.85561C20.7335 6.54545 20.7043 6.27273 20.6458 6.03743C20.5873 5.80214 20.5009 5.60428 20.3866 5.44385C20.2724 5.28342 20.1331 5.1631 19.9687 5.08289C19.8042 5 19.6162 4.95856 19.4044 4.95856C19.1926 4.95856 19.0045 5 18.8401 5.08289C18.6785 5.1631 18.5406 5.28342 18.4263 5.44385C18.3149 5.60428 18.2299 5.80214 18.1714 6.03743C18.1129 6.27273 18.0836 6.54545 18.0836 6.85561V7.14037C18.0836 7.44786 18.1129 7.72059 18.1714 7.95856C18.2299 8.19385 18.3163 8.39305 18.4305 8.55615C18.5448 8.71658 18.6841 8.83823 18.8485 8.92112C19.0129 9.00401 19.201 9.04545 19.4127 9.04545C19.6245 9.04545 19.8126 9.00401 19.977 8.92112C20.1414 8.83823 20.2793 8.71658 20.3908 8.55615C20.5023 8.39305 20.5873 8.19385 20.6458 7.95856C20.7043 7.72059 20.7335 7.44786 20.7335 7.14037Z" fill="#F5F5F5"/>
                <defs>
                  <linearGradient id="paint0_linear_991_41200" x1="0" y1="0" x2="28.4235" y2="13.0798" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF961B"/>
                    <stop offset="1" stopColor="#DA7600"/>
                  </linearGradient>
                </defs>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14" fill="none">
                <rect width="32" height="14" rx="3" fill="url(#paint0_linear_991_51507)"/>
                <path d="M8.31566 7.35695H6.79626L6.78814 6.53075H8.06378C8.28858 6.53075 8.47275 6.50267 8.61629 6.44652C8.75983 6.3877 8.86682 6.30348 8.93723 6.19385C9.01036 6.08155 9.04692 5.94519 9.04692 5.78476C9.04692 5.60294 9.01171 5.45588 8.9413 5.34358C8.87359 5.23128 8.76661 5.14973 8.62035 5.09893C8.47681 5.04813 8.29129 5.02273 8.06378 5.02273H7.21877V9.91979H6V4.08021H8.06378C8.40775 4.08021 8.71515 4.1123 8.98598 4.17647C9.25953 4.24064 9.4911 4.33824 9.68068 4.46925C9.87027 4.60027 10.0152 4.76604 10.1154 4.96658C10.2156 5.16444 10.2657 5.39973 10.2657 5.67246C10.2657 5.9131 10.2102 6.13503 10.0991 6.33824C9.99079 6.54144 9.81881 6.70722 9.58318 6.83556C9.35026 6.9639 9.04557 7.03476 8.6691 7.04813L8.31566 7.35695ZM8.26285 9.91979H6.46313L6.93845 8.98128H8.26285C8.47681 8.98128 8.6515 8.94786 8.78692 8.88102C8.92234 8.8115 9.02255 8.71791 9.08755 8.60027C9.15255 8.48262 9.18505 8.34759 9.18505 8.19519C9.18505 8.02406 9.15526 7.87567 9.09567 7.75C9.0388 7.62433 8.94671 7.52807 8.81942 7.46123C8.69213 7.39171 8.52421 7.35695 8.31566 7.35695H7.14158L7.14971 6.53075H8.61223L8.89255 6.85561C9.25276 6.85027 9.54256 6.9131 9.76193 7.04412C9.98402 7.17246 10.1452 7.33957 10.2454 7.54545C10.3483 7.75134 10.3998 7.97193 10.3998 8.20722C10.3998 8.58155 10.3172 8.89706 10.1519 9.15374C9.98673 9.40775 9.74433 9.59893 9.42474 9.72727C9.10786 9.85561 8.72056 9.91979 8.26285 9.91979Z" fill="#F5F5F5"/>
                <path d="M13.7189 5.07888L12.1101 9.91979H10.8141L13.012 4.08021H13.8367L13.7189 5.07888ZM15.0555 9.91979L13.4426 5.07888L13.3126 4.08021H14.1454L16.3555 9.91979H15.0555ZM14.9823 7.74599V8.6885H11.8582V7.74599H14.9823Z" fill="#F5F5F5"/>
                <path d="M19.9833 8.39171C19.9833 8.28743 19.9671 8.19385 19.9346 8.11096C19.9048 8.0254 19.8479 7.94786 19.764 7.87834C19.68 7.80615 19.5622 7.73529 19.4105 7.66578C19.2589 7.59626 19.0625 7.52406 18.8215 7.4492C18.5533 7.36364 18.2987 7.26738 18.0577 7.16043C17.8194 7.05348 17.6081 6.92914 17.4239 6.78743C17.2425 6.64305 17.0989 6.47594 16.9933 6.2861C16.8904 6.09626 16.8389 5.87567 16.8389 5.62433C16.8389 5.38102 16.8931 5.16043 17.0014 4.96257C17.1098 4.76203 17.2614 4.59091 17.4564 4.4492C17.6514 4.30481 17.8816 4.19385 18.1471 4.11631C18.4152 4.03877 18.7091 4 19.0286 4C19.4647 4 19.8452 4.07754 20.1702 4.23262C20.4952 4.3877 20.7471 4.60027 20.9259 4.87032C21.1073 5.14037 21.198 5.4492 21.198 5.79679H19.9874C19.9874 5.62567 19.9508 5.47594 19.8777 5.34759C19.8073 5.21658 19.699 5.11364 19.5527 5.03877C19.4092 4.9639 19.2277 4.92647 19.0083 4.92647C18.7971 4.92647 18.621 4.95856 18.4802 5.02273C18.3394 5.08422 18.2337 5.16845 18.1633 5.2754C18.0929 5.37968 18.0577 5.49733 18.0577 5.62834C18.0577 5.72727 18.0821 5.81684 18.1308 5.89706C18.1823 5.97727 18.2581 6.05214 18.3583 6.12166C18.4585 6.19118 18.5818 6.25668 18.728 6.31818C18.8743 6.37968 19.0435 6.43984 19.2358 6.49866C19.5581 6.59492 19.8412 6.70321 20.0849 6.82353C20.3314 6.94385 20.5372 7.07888 20.7024 7.22861C20.8676 7.37834 20.9922 7.54813 21.0762 7.73797C21.1601 7.92781 21.2021 8.14305 21.2021 8.38369C21.2021 8.6377 21.152 8.86497 21.0518 9.06551C20.9516 9.26604 20.8067 9.43583 20.6171 9.57487C20.4275 9.7139 20.2014 9.81952 19.9387 9.89171C19.6759 9.9639 19.3821 10 19.0571 10C18.7646 10 18.4761 9.96257 18.1918 9.8877C17.9074 9.81016 17.6487 9.69385 17.4158 9.53877C17.1856 9.38369 17.0014 9.18583 16.8633 8.94519C16.7252 8.70455 16.6561 8.41979 16.6561 8.09091H17.8789C17.8789 8.27273 17.9074 8.42647 17.9642 8.55214C18.0211 8.67781 18.101 8.77941 18.2039 8.85695C18.3096 8.93449 18.4342 8.99064 18.5777 9.0254C18.7239 9.06016 18.8837 9.07754 19.0571 9.07754C19.2683 9.07754 19.4417 9.04813 19.5771 8.9893C19.7152 8.93048 19.8168 8.84893 19.8818 8.74465C19.9495 8.64037 19.9833 8.52273 19.9833 8.39171Z" fill="#F5F5F5"/>
                <path d="M26 8.98128V9.91979H22.8515V8.98128H26ZM23.2496 4.08021V9.91979H22.0309V4.08021H23.2496ZM25.5897 6.45856V7.37299H22.8515V6.45856H25.5897ZM25.9959 4.08021V5.02273H22.8515V4.08021H25.9959Z" fill="#F5F5F5"/>
                <defs>
                  <linearGradient id="paint0_linear_991_51507" x1="0" y1="0" x2="30.8344" y2="16.2163" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#335EFF"/>
                    <stop offset="1" stopColor="#0036FF"/>
                  </linearGradient>
                </defs>
              </svg>
              }
            </span>
          </div>
          <div className={styles.headerNav__mail}>{mail}</div>
      </div>
      </div>
      
        <div className={styles.headerNav__control}>
          <Link href='/' className={styles.headerNav__item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.8906 9.17747C11.8906 9.69328 12.3097 10.1123 12.8255 10.1123C13.3413 10.1123 13.7603 9.69328 13.7603 9.17747C13.7603 8.66319 13.3413 8.24414 12.8255 8.24414C12.3097 8.24414 11.8906 8.66319 11.8906 9.17747ZM5.55693 10.1124C5.04112 10.1124 4.62207 9.69338 4.62207 9.17757C4.62207 8.66329 5.04112 8.24424 5.55693 8.24424C6.07274 8.24424 6.49178 8.66329 6.49178 9.17757C6.49178 9.69338 6.07274 10.1124 5.55693 10.1124ZM9.19072 10.1124C8.67491 10.1124 8.25586 9.69338 8.25586 9.17757C8.25586 8.66329 8.67491 8.24424 9.19072 8.24424C9.70653 8.24424 10.1256 8.66329 10.1256 9.17757C10.1256 9.69338 9.70653 10.1124 9.19072 10.1124Z" fill="#242424"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.016 1C4.368 1 1 4.7969 1 9.01202C1 10.358 1.392 11.7433 2.08 13.0092C2.208 13.2183 2.224 13.4819 2.136 13.7311L1.6 15.5258C1.48 15.9584 1.848 16.2781 2.256 16.1499L3.872 15.67C4.312 15.5258 4.656 15.7093 5.064 15.9584C6.232 16.6467 7.688 17 9 17C12.968 17 17 13.9314 17 8.98798C17 4.72479 13.56 1 9.016 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </Link>
          <Link href='/' className={styles.headerNav__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <mask id="path-1-inside-1_991_51567" fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.42077 13.6001C6.11159 13.6001 6.67162 14.1374 6.67162 14.8001C6.67162 15.4628 6.11159 16.0001 5.42077 16.0001C4.72995 16.0001 4.16992 15.4628 4.16992 14.8001C4.16992 14.1374 4.72995 13.6001 5.42077 13.6001ZM12.9247 13.6001C13.6155 13.6001 14.1755 14.1374 14.1755 14.8001C14.1755 15.4628 13.6155 16.0001 12.9247 16.0001C12.2339 16.0001 11.6738 15.4628 11.6738 14.8001C11.6738 14.1374 12.2339 13.6001 12.9247 13.6001ZM0.833898 0H2.5017C2.88162 0 3.2091 0.245472 3.30645 0.590191L3.3259 0.678354L3.73028 3.2H15.8441C16.3442 3.2 16.7238 3.61654 16.6739 4.08028L16.6581 4.17354L15.2805 10.1206C15.0372 11.171 14.0978 11.9315 12.9904 11.9956L12.8384 12H5.60033C4.41495 12 3.39978 11.2035 3.15435 10.1039L3.12772 9.96494L1.78628 1.6H0.833898C0.373349 1.6 0 1.24183 0 0.8C0 0.389731 0.321918 0.0515943 0.736648 0.00538219L0.833898 0H2.5017H0.833898ZM14.804 4.80005H3.98633L4.77559 9.72169C4.83336 10.0819 5.13605 10.3551 5.506 10.395L5.59979 10.4H12.8379C13.1962 10.4 13.5104 10.1812 13.6256 9.86281L13.6519 9.77359L14.804 4.80005Z"/>
              </mask>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.42077 13.6001C6.11159 13.6001 6.67162 14.1374 6.67162 14.8001C6.67162 15.4628 6.11159 16.0001 5.42077 16.0001C4.72995 16.0001 4.16992 15.4628 4.16992 14.8001C4.16992 14.1374 4.72995 13.6001 5.42077 13.6001ZM12.9247 13.6001C13.6155 13.6001 14.1755 14.1374 14.1755 14.8001C14.1755 15.4628 13.6155 16.0001 12.9247 16.0001C12.2339 16.0001 11.6738 15.4628 11.6738 14.8001C11.6738 14.1374 12.2339 13.6001 12.9247 13.6001ZM0.833898 0H2.5017C2.88162 0 3.2091 0.245472 3.30645 0.590191L3.3259 0.678354L3.73028 3.2H15.8441C16.3442 3.2 16.7238 3.61654 16.6739 4.08028L16.6581 4.17354L15.2805 10.1206C15.0372 11.171 14.0978 11.9315 12.9904 11.9956L12.8384 12H5.60033C4.41495 12 3.39978 11.2035 3.15435 10.1039L3.12772 9.96494L1.78628 1.6H0.833898C0.373349 1.6 0 1.24183 0 0.8C0 0.389731 0.321918 0.0515943 0.736648 0.00538219L0.833898 0H2.5017H0.833898ZM14.804 4.80005H3.98633L4.77559 9.72169C4.83336 10.0819 5.13605 10.3551 5.506 10.395L5.59979 10.4H12.8379C13.1962 10.4 13.5104 10.1812 13.6256 9.86281L13.6519 9.77359L14.804 4.80005Z" fill="#242424"/>
              <path d="M3.30645 0.590191L3.40427 0.56862L3.40269 0.563012L3.30645 0.590191ZM3.3259 0.678354L3.4248 0.662493L3.42355 0.656819L3.3259 0.678354ZM3.73028 3.2L3.63154 3.21583L3.64504 3.3H3.73028V3.2ZM16.6739 4.08028L16.7727 4.097L16.7733 4.09097L16.6739 4.08028ZM16.6581 4.17354L16.7557 4.19615L16.7567 4.19024L16.6581 4.17354ZM15.2805 10.1206L15.378 10.1432L15.2805 10.1206ZM12.9904 11.9956L12.9933 12.0956L12.9962 12.0954L12.9904 11.9956ZM12.8384 12V12.1L12.8413 12.1L12.8384 12ZM3.15435 10.1039L3.05609 10.1228L3.05675 10.1257L3.15435 10.1039ZM3.12772 9.96494L3.02894 9.98078L3.02951 9.98375L3.12772 9.96494ZM1.78628 1.6L1.88502 1.58417L1.87152 1.5H1.78628V1.6ZM0.736648 0.00538219L0.731114 -0.09462L0.725574 -0.0940027L0.736648 0.00538219ZM0.833898 0V-0.100153L0.828372 -0.0998472L0.833898 0ZM14.804 4.80005L14.9014 4.82262L14.9298 4.70005H14.804V4.80005ZM3.98633 4.80005V4.70005H3.86901L3.88759 4.81588L3.98633 4.80005ZM4.77559 9.72169L4.67685 9.73753L4.77559 9.72169ZM5.506 10.395L5.49527 10.4946L5.50065 10.4949L5.506 10.395ZM5.59979 10.4L5.59443 10.5H5.59979V10.4ZM13.6256 9.86281L13.7198 9.89689L13.7215 9.89115L13.6256 9.86281ZM13.6519 9.77359L13.748 9.80198L13.7493 9.79616L13.6519 9.77359ZM5.42077 13.7001C6.06032 13.7001 6.57162 14.1965 6.57162 14.8001H6.77162C6.77162 14.0783 6.16287 13.5001 5.42077 13.5001V13.7001ZM6.57162 14.8001C6.57162 15.4037 6.06032 15.9001 5.42077 15.9001V16.1001C6.16287 16.1001 6.77162 15.5219 6.77162 14.8001H6.57162ZM5.42077 15.9001C4.78122 15.9001 4.26992 15.4037 4.26992 14.8001H4.06992C4.06992 15.5219 4.67867 16.1001 5.42077 16.1001V15.9001ZM4.26992 14.8001C4.26992 14.1965 4.78122 13.7001 5.42077 13.7001V13.5001C4.67867 13.5001 4.06992 14.0783 4.06992 14.8001H4.26992ZM12.9247 13.7001C13.5642 13.7001 14.0755 14.1965 14.0755 14.8001H14.2755C14.2755 14.0783 13.6668 13.5001 12.9247 13.5001V13.7001ZM14.0755 14.8001C14.0755 15.4037 13.5642 15.9001 12.9247 15.9001V16.1001C13.6668 16.1001 14.2755 15.5219 14.2755 14.8001H14.0755ZM12.9247 15.9001C12.2851 15.9001 11.7738 15.4037 11.7738 14.8001H11.5738C11.5738 15.5219 12.1826 16.1001 12.9247 16.1001V15.9001ZM11.7738 14.8001C11.7738 14.1965 12.2851 13.7001 12.9247 13.7001V13.5001C12.1826 13.5001 11.5738 14.0783 11.5738 14.8001H11.7738ZM0.833898 0.1H2.5017V-0.1H0.833898V0.1ZM2.5017 0.1C2.83888 0.1 3.12557 0.317635 3.21022 0.617371L3.40269 0.563012C3.29263 0.173309 2.92437 -0.1 2.5017 -0.1V0.1ZM3.2088 0.611727L3.22824 0.69989L3.42355 0.656819L3.40411 0.568656L3.2088 0.611727ZM3.22716 0.694188L3.63154 3.21583L3.82902 3.18417L3.42463 0.66252L3.22716 0.694188ZM3.73028 3.3H15.8441V3.1H3.73028V3.3ZM15.8441 3.3C16.2885 3.3 16.6176 3.66865 16.5745 4.06959L16.7733 4.09097C16.8299 3.56444 16.3999 3.1 15.8441 3.1V3.3ZM16.5753 4.06358L16.5595 4.15685L16.7567 4.19024L16.7725 4.09697L16.5753 4.06358ZM16.5607 4.15098L15.1831 10.0981L15.378 10.1432L16.7555 4.19611L16.5607 4.15098ZM15.1831 10.0981C14.9504 11.1026 14.0504 11.834 12.9846 11.8958L12.9962 12.0954C14.1452 12.0289 15.124 11.2394 15.378 10.1432L15.1831 10.0981ZM12.9875 11.8956L12.8355 11.9L12.8413 12.1L12.9933 12.0956L12.9875 11.8956ZM12.8384 11.9H5.60033V12.1H12.8384V11.9ZM5.60033 11.9C4.4593 11.9 3.48664 11.1336 3.25195 10.0821L3.05675 10.1257C3.31292 11.2734 4.37061 12.1 5.60033 12.1V11.9ZM3.25256 10.0851L3.22594 9.94612L3.02951 9.98375L3.05613 10.1227L3.25256 10.0851ZM3.22646 9.9491L1.88502 1.58417L1.68754 1.61583L3.02898 9.98077L3.22646 9.9491ZM1.78628 1.5H0.833898V1.7H1.78628V1.5ZM0.833898 1.5C0.424626 1.5 0.1 1.18273 0.1 0.8H-0.1C-0.1 1.30093 0.322072 1.7 0.833898 1.7V1.5ZM0.1 0.8C0.1 0.444499 0.379728 0.145772 0.747722 0.104767L0.725574 -0.0940027C0.264109 -0.0425831 -0.1 0.334963 -0.1 0.8H0.1ZM0.742174 0.105229L0.839424 0.0998472L0.828372 -0.0998472L0.731122 -0.094465L0.742174 0.105229ZM0.833898 0.1H2.5017V-0.1H0.833898V0.1ZM2.5017 -0.1H0.833898V0.1H2.5017V-0.1ZM14.804 4.70005H3.98633V4.90005H14.804V4.70005ZM3.88759 4.81588L4.67685 9.73753L4.87433 9.70586L4.08507 4.78421L3.88759 4.81588ZM4.67685 9.73753C4.74223 10.1452 5.08353 10.45 5.49528 10.4944L5.51673 10.2956C5.18858 10.2602 4.92449 10.0187 4.87433 9.70586L4.67685 9.73753ZM5.50065 10.4949L5.59443 10.4999L5.60514 10.3002L5.51136 10.2952L5.50065 10.4949ZM5.59979 10.5H12.8379V10.3H5.59979V10.5ZM12.8379 10.5C13.2365 10.5 13.5895 10.2564 13.7196 9.89683L13.5315 9.82879C13.4312 10.106 13.1558 10.3 12.8379 10.3V10.5ZM13.7215 9.89115L13.7478 9.80193L13.556 9.74525L13.5297 9.83447L13.7215 9.89115ZM13.7493 9.79616L14.9014 4.82262L14.7066 4.77748L13.5545 9.75103L13.7493 9.79616Z" fill="#F5F5F5" mask="url(#path-1-inside-1_991_51567)"/>
            </svg>
          </Link>
          <Link href='/' className={styles.headerNav__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5901 5.44952L15.072 4.55048C14.6336 3.78975 13.6623 3.52731 12.9005 3.96381V3.96381C12.5379 4.17742 12.1052 4.23803 11.6979 4.13226C11.2905 4.02649 10.942 3.76304 10.7291 3.4C10.5921 3.16925 10.5186 2.90642 10.5158 2.6381V2.6381C10.5281 2.20791 10.3658 1.79103 10.0658 1.48244C9.76586 1.17385 9.35375 0.999823 8.92338 1H7.87957C7.45795 0.999995 7.0537 1.16801 6.75628 1.46686C6.45886 1.76571 6.29279 2.17076 6.29481 2.59238V2.59238C6.28232 3.46289 5.57303 4.16199 4.70243 4.1619C4.43411 4.15912 4.17128 4.08553 3.94053 3.94857V3.94857C3.17876 3.51207 2.20741 3.77451 1.7691 4.53524L1.21291 5.44952C0.775129 6.2093 1.03399 7.18004 1.79196 7.62095V7.62095C2.28465 7.9054 2.58816 8.43109 2.58816 9C2.58816 9.56891 2.28465 10.0946 1.79196 10.379V10.379C1.03495 10.817 0.775809 11.7854 1.21291 12.5429V12.5429L1.73862 13.4495C1.94399 13.8201 2.28856 14.0935 2.69608 14.2094C3.10361 14.3252 3.54049 14.2738 3.91005 14.0667V14.0667C4.27335 13.8547 4.70628 13.7966 5.11261 13.9053C5.51893 14.0141 5.86499 14.2806 6.07386 14.6457C6.21082 14.8765 6.28441 15.1393 6.28719 15.4076V15.4076C6.28719 16.2871 7.00013 17 7.87957 17H8.92338C9.79987 17 10.5116 16.2917 10.5158 15.4152V15.4152C10.5137 14.9923 10.6808 14.5861 10.9799 14.287C11.279 13.9879 11.6852 13.8208 12.1081 13.8229C12.3758 13.83 12.6376 13.9033 12.8701 14.0362V14.0362C13.6298 14.474 14.6006 14.2151 15.0415 13.4571V13.4571L15.5901 12.5429C15.8024 12.1784 15.8607 11.7443 15.752 11.3368C15.6433 10.9292 15.3766 10.5818 15.011 10.3714V10.3714C14.6454 10.1611 14.3787 9.81367 14.27 9.4061C14.1613 8.99854 14.2196 8.56446 14.432 8.2C14.57 7.95892 14.7699 7.75903 15.011 7.62095V7.62095C15.7644 7.18028 16.0227 6.21521 15.5901 5.45714V5.45714V5.44952Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8.40522" cy="8.99995" r="2.19429" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
       
      </div>
    </div>
   );
}
 
export default HeaderNavigation;