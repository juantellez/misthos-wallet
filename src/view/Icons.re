include ViewCommon;

let arrowRight =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16">
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <path d="M1 8h14M8 1l7 7-7 7" />
    </g>
  </svg>;

let arrowUpCircle =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26">
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      transform="translate(1 1)">
      <circle cx="12" cy="12" r="12" />
      <path d="M12 17V7M7 12l5-5 5 5" />
    </g>
  </svg>;

let close =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20">
    <g fill="none" fillRule="evenodd">
      <path
        fill="#000"
        d="M19.333 2.533L17.467.667 10 8.133 2.533.667.667 2.533 8.133 10 .667 17.467l1.866 1.866L10 11.867l7.467 7.466 1.866-1.866L11.867 10z"
      />
      <path d="M26 26H-6V-6h32z" />
    </g>
  </svg>;

let copy =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22">
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      transform="translate(1 1)">
      <rect width="13" height="13" x="7" y="7" rx="2" />
      <path d="M3 13H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </g>
  </svg>;

let logoBig =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="584"
    height="419"
    viewBox="0 0 584 419">
    <defs>
      <linearGradient
        id="a" x1="-1.816%" x2="117.054%" y1="69.515%" y2="38.068%">
        <stop offset="0%" stopColor="#59F7F0" />
        <stop offset="49.223%" stopColor="#02A2B4" />
        <stop offset="100%" stopColor="#067781" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillRule="nonzero"
      d="M235.397 190.474h113.805v228.21H235.397v-228.21zM410.864.014C506.19.143 584 81.797 584 182.559v236.125H472.253V182.558c0-37.751-27.529-68.653-63.268-68.653-26.714 0-48.225 16.02-58.085 41.289H232.56c-9.854-25.27-31.101-41.289-57.815-41.289-35.729 0-62.993 30.907-62.993 68.653v236.125H0V3.593h111.752v9.683C173.04-13.47 244.61.896 293.65 50.07 325.662 17.904 366.685-.02 410.864.015z"
    />
  </svg>;

let logoSolid =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="32"
    viewBox="0 0 45 32">
    <defs>
      <linearGradient
        id="a" x1="-1.816%" x2="117.054%" y1="69.515%" y2="38.068%">
        <stop offset="0%" stopColor="#59F7F0" />
        <stop offset="49.223%" stopColor="#02A2B4" />
        <stop offset="100%" stopColor="#067781" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillRule="nonzero"
      d="M41.991 30.558h8.699V48H41.99V30.558zM55.402 16c7.286.01 13.233 6.25 13.233 13.952V48h-8.54V29.953c0-2.885-2.105-5.247-4.836-5.247-2.042 0-3.686 1.224-4.44 3.155h-9.044c-.754-1.93-2.377-3.155-4.42-3.155-2.73 0-4.814 2.362-4.814 5.247V48H24V16.275h8.541v.74c4.684-2.045 10.155-.946 13.903 2.812 2.446-2.459 5.582-3.829 8.958-3.826z"
      transform="translate(-24 -16)"
    />
  </svg>;

let menu =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="16"
    viewBox="0 0 24 16">
    <g fill="none" fillRule="evenodd">
      <path d="M-4-8h32v32H-4z" />
      <path
        fill="#000"
        d="M0 16h12v-2.667H0V16zm0-6.667h24V6.667H0v2.666zM0 0v2.667h24V0H0z"
      />
    </g>
  </svg>;

let minusCircle =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26">
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      transform="translate(1 1)">
      <circle cx="12" cy="12" r="12" />
      <path d="M7.2 12h9.6" />
    </g>
  </svg>;

let plusCircle =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26">
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      transform="translate(1 1)">
      <circle cx="12" cy="12" r="12" />
      <path d="M12 7.2v9.6M7.2 12h9.6" />
    </g>
  </svg>;

let remove =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26">
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      transform="translate(1 1)">
      <circle cx="12" cy="12" r="12" />
      <path d="M15.6 8.4l-7.2 7.2M8.4 8.4l7.2 7.2" />
    </g>
  </svg>;

let stepBg =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44">
    <defs>
      <linearGradient
        id="a" x1="162.467%" x2="-41.102%" y1="29.557%" y2="66.287%">
        <stop offset="0%" stopColor="#05CFDB" />
        <stop offset="100%" stopColor="#02A2B4" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx="21" cy="21" r="21" stroke="#000" />
      <circle cx="21" cy="21" r="18" fill="url(#a)" />
    </g>
  </svg>;