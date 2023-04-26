export default [
  {
    title: "داشبورد",
    to: "dashboards-crm",
    svg: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0059 21.0055H7.99512V14.5731C7.99512 13.9785 8.4816 13.492 9.0762 13.492H12.9248C13.5194 13.492 14.0059 13.9785 14.0059 14.5731V21.0055V21.0055Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 10.3459V17.6C21 19.4811 19.5514 21.0054 17.7568 21.0054H4.24324C2.44865 21.0054 1 19.4811 1 17.6V10.3459C1 9.32973 1.42162 8.37838 2.16757 7.72973L8.92432 1.79459C10.1243 0.735135 11.8757 0.735135 13.0757 1.79459L19.8324 7.72973C20.5784 8.37838 21 9.32973 21 10.3459Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    icon: { icon: "mdi-home-outline" },
  },

  {
    title: "تقویم",
    svg: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="4.33334" width="20" height="16.6667" rx="2" stroke="#fff" stroke-width="1.5"/>
<path d="M1 8.33334C1 6.44773 1 5.50492 1.58579 4.91913C2.17157 4.33334 3.11438 4.33334 5 4.33334H17C18.8856 4.33334 19.8284 4.33334 20.4142 4.91913C21 5.50492 21 6.44773 21 8.33334V8.77779H1V8.33334Z" fill="#fff"/>
<path d="M5.44434 1L5.44434 4.33333" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
<path d="M16.5557 1L16.5557 4.33333" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
</svg>

    `,
    icon: { icon: "mdi-calendar-blank-outline" },
    to: "apps-calendar",
  },
  {
    title: "دوره ها",
    svg: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7742 16.5808H3.22582C1.99405 16.5808 1 15.5867 1 14.3549V3.22582C1 1.99405 1.99405 1 3.22582 1H18.7742C20.0059 1 21 1.99405 21 3.22582V14.3549C21 15.5867 20.0059 16.5808 18.7742 16.5808Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99589 16.5809L8.3584 20.4166" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9072 16.7645L13.5123 20.3733" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 21H15.3817" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.28125 13.2096H20.9355" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    to: "apps-courses",
    icon: { icon: "mdi-monitor" },
  },
  {
    title: "رضایت دوره",
    to: "apps-courses-satisfaction",
    svg: `<svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83731 0.00110973C5.60467 0.0453564 5.39515 0.170397 5.24576 0.354143C5.09638 0.537889 5.01674 0.768518 5.02091 1.00529V2.00947H1.41188C0.608534 2.00947 0 2.61801 0 3.42135V24.6035C0 25.5073 0.608534 26.1098 1.41188 26.1098H18.5774C19.3807 26.1098 19.9892 25.5013 19.9892 24.6979V3.42135C20.0897 2.61801 19.4751 2.00947 18.6717 2.00947H15.0627V1.00529C15.0627 0.738966 14.9569 0.483548 14.7686 0.295228C14.5803 0.106907 14.3249 0.00110973 14.0585 0.00110973H6.02509C5.99364 -0.00036991 5.96214 -0.00036991 5.93069 0.00110973C5.89925 -0.00036991 5.86775 -0.00036991 5.8363 0.00110973H5.83731ZM7.02927 2.00947H13.0544V4.01784H7.02927V2.00947ZM2.00836 4.01784H5.02091V5.02202C5.02091 5.28834 5.1267 5.54376 5.31502 5.73208C5.50335 5.9204 5.75876 6.0262 6.02509 6.0262H14.0585C14.3249 6.0262 14.5803 5.9204 14.7686 5.73208C14.9569 5.54376 15.0627 5.28834 15.0627 5.02202V4.01784H18.0753V24.1015H2.00836V4.01784ZM4.01673 9.03874V13.0555H8.03345V9.03874H4.01673ZM5.02091 10.0429H7.02927V12.0513H5.02091V10.0429ZM10.0418 10.0429V12.0513H16.0669V10.0429H10.0418ZM4.01673 15.0638V19.0806H8.03345V15.0638H4.01673ZM10.0418 16.068V18.0764H16.0669V16.068H10.0418Z" fill="#fff"/>
</svg>
`,
  },
  {
    title: "PLO",
    to: "apps-plo",
    icon: { icon: "mdi-text-box-check" },
  },
  {
    title: "ارسال تیکت",
    to: "apps-ticket",
    svg: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7725 9.01321V1.24023H3.22656V9.01321" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8865 8.29961C20.5568 8.73204 21 9.4888 21 10.3429V18.8077C21 20.1483 19.9081 21.2401 18.5676 21.2401H3.43243C2.09189 21.2401 1 20.1483 1 18.8077V10.3429C1 9.4888 1.44324 8.73204 2.11351 8.29961" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8863 8.63477L12.4593 15.1321C11.6269 15.8672 10.3728 15.8672 9.52957 15.1321L2.10254 8.63477" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3027 14.4943L19.8865 20.1268" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.11328 20.1267L8.77274 14.5699" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.55664 4.56992H7.67015" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.55664 7.91055H15.4431" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    icon: { icon: "mdi-email-newsletter" },
  },
  {
    title: "سوابق مالی",
    to: "apps-purchaseHistory",
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6842 16.8744C11.0421 16.8744 8.75789 15.3796 7.62105 13.1902H13.6842L14.7368 11.0849H6.92632C6.87368 10.7375 6.84211 10.3902 6.84211 10.0323C6.84211 9.67438 6.87368 9.32701 6.92632 8.97965H13.6842L14.7368 6.87438H7.62105C8.75789 4.68491 11.0526 3.19017 13.6842 3.19017C15.3789 3.19017 16.9368 3.81123 18.1368 4.8428L20 2.97965C18.3263 1.47438 16.1053 0.558594 13.6842 0.558594C9.55789 0.558594 6.06316 3.2007 4.75789 6.87438H1.05263L0 8.97965H4.27368C4.23158 9.32701 4.21053 9.67438 4.21053 10.0323C4.21053 10.3902 4.23158 10.7375 4.27368 11.0849H1.05263L0 13.1902H4.75789C6.06316 16.8639 9.55789 19.506 13.6842 19.506C16.1158 19.506 18.3263 18.5902 20 17.0849L18.1263 15.2218C16.9368 16.2533 15.3895 16.8744 13.6842 16.8744Z" fill="#fff" />
</svg>
`,
  },
];
