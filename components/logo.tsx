import Link from "next/link";
import { useRouter } from "next/router";
import React, { HTMLProps } from "react";

export type AllIconProps = HTMLProps<HTMLSpanElement>;

const Logo = ({ className }: AllIconProps) => {
  const router = useRouter();

  const nonIndexPage = router.pathname !== "/";
  return (
    <Link passHref href="/">
      <span className={className} style={{ cursor: "pointer" }}>
        <svg
          width="99"
          height="111"
          viewBox="0 0 99 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.703 78.9024C26.1935 78.9024 20.0796 75.9973 14.9846 79.548C18.0416 82.776 25.9388 81.4848 26.703 78.9024Z"
            fill="black"
          />
          <path
            d="M29.7602 77.2882C29.7602 72.9842 29.7602 64.3764 27.4675 62.7625C25.6333 61.4713 24.665 74.0602 29.7602 77.2882Z"
            fill="black"
          />
          <path
            d="M17.2773 65.023C20.0795 61.1495 19.8757 51.7885 18.0415 50.4973C16.2073 49.2062 14.9845 59.5355 17.2773 65.023Z"
            fill="black"
          />
          <path
            d="M14.9846 65.0234C12.9464 62.7637 6.39956 54.6514 3.88221 59.1166C2.60835 61.3762 7.59664 65.9917 14.9846 65.0234Z"
            fill="black"
          />
          <path
            d="M8.87038 46.9468C7.8514 43.3961 3.26588 35.9717 1.48275 37.5857C-0.300507 39.1998 3.01115 44.6872 8.87038 46.9468Z"
            fill="black"
          />
          <path
            d="M11.6727 46.947C13.6453 44.3646 17.2774 41.1366 17.2774 35.972C17.2774 32.6485 10.1442 42.1051 11.6727 46.947Z"
            fill="black"
          />
          <path
            d="M11.6726 31.7751C14.9843 32.7435 20.8435 24.3509 19.8245 23.7053C18.4574 22.8391 12.4368 27.256 11.6726 31.7751Z"
            fill="black"
          />
          <path
            d="M9.37978 31.1303C12.1821 27.9023 7.85128 18.2186 7.34178 19.1869C5.88684 21.9522 7.08703 27.2568 9.37978 31.1303Z"
            fill="black"
          />
          <path
            d="M17.2773 18.3353C20.589 19.3037 27.722 14.139 26.703 13.4934C25.3359 12.6272 18.0415 13.8162 17.2773 18.3353Z"
            fill="black"
          />
          <path
            d="M21.0984 9.17937C24.4102 10.1478 30.2694 1.75513 29.2504 1.10954C27.8832 0.243401 21.8626 4.66027 21.0984 9.17937Z"
            fill="black"
          />
          <path
            d="M15.7737 16.9262C18.0416 12.7299 16.7927 6.27402 15.7737 5.62843C14.4065 4.76229 12.1821 13.493 15.7737 16.9262Z"
            fill="black"
          />
          <path
            d="M84.2765 65.0235C84.786 60.1815 84.8169 52.1913 83.2575 50.4977C81.4742 48.5609 79.1815 60.5043 84.2765 65.0235Z"
            fill="black"
          />
          <path
            d="M89.881 47.915C90.3905 43.073 86.6001 37.988 85.0407 36.2943C83.2575 34.3576 84.2765 44.0415 89.881 47.915Z"
            fill="black"
          />
          <path
            d="M89.7628 32.0978C89.7628 27.9014 84.3759 23.7051 82.1203 23.7051C79.8648 23.7051 84.2763 32.0978 89.7628 32.0978Z"
            fill="black"
          />
          <path
            d="M91.9188 30.8068C93.9568 27.2559 96.2123 18.8633 93.9568 18.8633C91.7012 18.8633 89.8808 26.6103 91.9188 30.8068Z"
            fill="black"
          />
          <path
            d="M85.0405 16.9272C87.0785 13.3764 88.3151 5.30664 86.0595 5.30664C83.804 5.30664 83.0025 12.7308 85.0405 16.9272Z"
            fill="black"
          />
          <path
            d="M84.2764 18.8641C82.1204 14.0222 77.1063 12.4082 74.8507 12.4082C72.5952 12.4082 78.6719 20.1553 84.2764 18.8641Z"
            fill="black"
          />
          <path
            d="M80.9647 9.39729C78.8088 4.55538 74.304 1.10938 72.0485 1.10938C69.8594 1.10938 75.0387 10.1318 80.4692 9.48368C80.6342 9.46398 80.7995 9.43536 80.9647 9.39729Z"
            fill="black"
          />
          <path
            d="M92.2577 46.6033C98.2876 43.7175 98.7971 34.0337 97.2686 35.3249C95.7401 36.616 91.2387 42.7298 92.2577 46.6033Z"
            fill="black"
          />
          <path
            d="M85.8394 65.0579C92.9724 65.7034 97.052 58.9735 96.5389 58.6019C96.0257 58.2304 84.8204 61.1844 85.8394 65.0579Z"
            fill="black"
          />
          <path
            d="M72.5579 77.2892C75.3601 71.156 75.8696 64.7002 74.0864 62.7635C72.3031 60.8267 69.5009 71.8015 72.5579 77.2892Z"
            fill="black"
          />
          <path
            d="M74.0864 78.9037C79.6909 83.4228 86.0942 79.5494 85.5501 78.9037C85.006 78.2581 78.1624 74.7074 74.0864 78.9037Z"
            fill="black"
          />
          <path
            d="M63.1321 86.9527C66.9534 92.4402 74.6305 91.149 74.0864 90.5034C73.5423 89.8578 67.2081 84.3901 63.1321 86.9527Z"
            fill="black"
          />
          <path
            d="M56.7634 90.5027C59.0561 96.9784 65.7142 97.9468 65.1701 97.3011C64.626 96.6555 60.0751 88.9085 56.7634 90.5027Z"
            fill="black"
          />
          <path
            d="M43.7711 90.5039C38.4214 91.8149 35.1096 97.3024 36.1286 97.9479C37.1476 98.5935 44.7901 93.106 43.7711 90.5039Z"
            fill="black"
          />
          <path
            d="M37.912 86.9526C31.5432 85.0356 25.6841 90.8459 26.7031 91.4915C27.7221 92.137 35.1097 92.4598 37.912 86.9526Z"
            fill="black"
          />
          <path
            d="M46.3186 88.9093L50.3946 94.7196L55.2349 88.9093C55.8293 87.5105 55.7444 84.2826 54.4706 83.7446C53.1969 83.2066 51.5155 83.8737 50.9041 85.6814C50.1399 84.3902 49.1209 82.7762 47.0829 83.7446C46.0868 84.2179 45.0449 87.9409 46.3186 88.9093Z"
            fill="black"
          />
          <path
            d="M21.0984 9.17937C14.8146 20.1977 2.81466 37.5851 14.9846 61.472C19.9183 71.1558 36.1286 87.2757 46.3186 88.9094M46.3186 88.9094L50.3946 94.7197L55.2349 88.9094M46.3186 88.9094C45.0449 87.941 46.0867 84.218 47.0829 83.7447C49.1209 82.7763 50.1399 84.3903 50.9041 85.6815C51.5155 83.8738 53.1969 83.2067 54.4706 83.7447C55.7444 84.2827 55.8293 87.5106 55.2349 88.9094M55.2349 88.9094C63.8177 83.8523 81.2109 72.6406 82.1204 68.2506C85.0406 63.7315 92.5463 53.4021 91.1546 36.9396C90.0413 23.7697 83.5671 13.1483 80.4691 9.48384M45.2996 34.3573C46.1488 33.4965 47.6943 31.3876 47.0829 29.8382C46.4715 28.2888 43.5 28.5 41.4784 29.8382L32.5621 36.9396C31.5 38 31.0336 41.136 33.0716 41.136C35.789 41.3511 41.1727 41.8461 40.9689 42.1043C40.7651 42.3626 32.5621 51.2502 28.4861 55.6617C27.4674 57 27.5913 61.29 31.0336 59.858C35.5 58 36.5 57.5 47.5 46M77.9076 28.8698C71.8856 29.2016 67.1418 29.5333 63.6416 30.0841M57.0181 32.4205C58.1327 31.3221 60.3307 30.6051 63.6416 30.0841M63.6416 30.0841L55.2349 59.5352M66.4439 42.1043C64.9154 42.1043 58.2919 42.4271 55.7444 44.6867M52.4326 45.6551C51.9231 46.3007 50.1399 49.5286 49.3756 47.9146C48.7642 46.6234 49.7153 43.6107 50.3946 42.4271C51.9231 41.7815 53.9611 43.7183 49.2935 45.6551M21.0984 9.17937C24.4102 10.1478 30.2694 1.75513 29.2504 1.10954C27.8832 0.243401 21.8627 4.66027 21.0984 9.17937ZM80.4691 9.48384C75.0386 10.132 69.8593 1.10954 72.0484 1.10954C74.3039 1.10954 78.8087 4.55554 80.9646 9.39745C80.7994 9.43552 80.6341 9.46414 80.4691 9.48384ZM29.7601 77.2889C29.7601 72.9849 29.7601 64.3771 27.4674 62.7632C25.6332 61.472 24.6649 74.0609 29.7601 77.2889ZM26.703 78.9028C26.1935 78.9028 20.0796 75.9977 14.9846 79.5484C18.0416 82.7764 25.9388 81.4852 26.703 78.9028ZM17.2774 65.0228C20.0796 61.1493 19.8758 51.7883 18.0416 50.4971C16.2074 49.206 14.9846 59.5353 17.2774 65.0228ZM14.9846 65.0228C12.9464 62.7631 6.39955 54.6508 3.8822 59.116C2.60834 61.3756 7.59663 65.9911 14.9846 65.0228ZM8.87038 46.9462C7.8514 43.3955 3.26588 35.9712 1.48275 37.5851C-0.300507 39.1992 3.01115 44.6866 8.87038 46.9462ZM11.6727 46.9462C13.6453 44.3638 17.2774 41.1358 17.2774 35.9712C17.2774 32.6477 10.1442 42.1043 11.6727 46.9462ZM11.6727 31.7749C14.9844 32.7433 20.8436 24.3507 19.8246 23.7051C18.4575 22.8389 12.4369 27.2558 11.6727 31.7749ZM9.3799 31.1293C12.1822 27.9013 7.8514 18.2176 7.3419 19.1859C5.88696 21.9512 7.08715 27.2558 9.3799 31.1293ZM17.2774 18.3351C20.5891 19.3035 27.7221 14.1388 26.7031 13.4932C25.336 12.627 18.0416 13.816 17.2774 18.3351ZM15.7737 16.9264C18.0416 12.7301 16.7927 6.27424 15.7737 5.62865C14.4065 4.76251 12.1821 13.4932 15.7737 16.9264ZM84.2764 65.0228C84.7859 60.1808 84.8168 52.1906 83.2574 50.497C81.4741 48.5602 79.1814 60.5036 84.2764 65.0228ZM89.8809 47.9146C90.3904 43.0726 86.6 37.9876 85.0406 36.2939C83.2574 34.3572 84.2764 44.0411 89.8809 47.9146ZM89.7629 32.0977C89.7629 27.9013 84.376 23.705 82.1204 23.705C79.8649 23.705 84.2764 32.0977 89.7629 32.0977ZM91.9189 30.8067C93.9569 27.2558 96.2124 18.8632 93.9569 18.8632C91.7013 18.8632 89.8809 26.6102 91.9189 30.8067ZM85.0406 16.9264C87.0786 13.3756 88.3152 5.30586 86.0596 5.30586C83.8041 5.30586 83.0026 12.73 85.0406 16.9264ZM84.2764 18.8632C82.1204 14.0213 77.1062 12.4073 74.8506 12.4073C72.5951 12.4073 78.6719 20.1544 84.2764 18.8632ZM92.2577 46.6041C98.2876 43.7183 98.7971 34.0345 97.2686 35.3257C95.7401 36.6168 91.2387 42.7306 92.2577 46.6041ZM85.8395 65.0577C92.9725 65.7032 97.0521 58.9733 96.539 58.6017C96.0258 58.2302 84.8205 61.1842 85.8395 65.0577ZM72.5579 77.2889C75.3601 71.1557 75.8696 64.6999 74.0864 62.7632C72.3031 60.8264 69.5009 71.8012 72.5579 77.2889ZM74.0864 78.9028C79.6909 83.4219 86.0942 79.5485 85.5501 78.9028C85.006 78.2572 78.1624 74.7065 74.0864 78.9028ZM63.1321 86.9529C66.9534 92.4404 74.6305 91.1492 74.0864 90.5036C73.5423 89.858 67.2081 84.3903 63.1321 86.9529ZM56.7634 90.5036C59.0561 96.9793 65.7142 97.9477 65.1701 97.302C64.626 96.6564 60.0751 88.9094 56.7634 90.5036ZM43.7711 90.5036C38.4214 91.8146 35.1096 97.3021 36.1286 97.9476C37.1476 98.5932 44.7901 93.1057 43.7711 90.5036ZM37.9119 86.9529C31.5431 85.0359 25.684 90.8462 26.703 91.4918C27.722 92.1373 35.1096 92.4601 37.9119 86.9529Z"
            stroke="black"
          />
          {nonIndexPage && (
            <>
              <path
                d="M39.5246 102.516L36.3686 110.88H35.1086L31.9526 102.516H33.1166L35.7446 109.728L38.3726 102.516H39.5246Z"
                fill="#30312C"
              />
              <path
                d="M43.59 110.988C42.974 110.988 42.414 110.848 41.91 110.568C41.414 110.288 41.022 109.892 40.734 109.38C40.454 108.86 40.314 108.26 40.314 107.58C40.314 106.908 40.458 106.316 40.746 105.804C41.042 105.284 41.442 104.888 41.946 104.616C42.45 104.336 43.014 104.196 43.638 104.196C44.262 104.196 44.826 104.336 45.33 104.616C45.834 104.888 46.23 105.28 46.518 105.792C46.814 106.304 46.962 106.9 46.962 107.58C46.962 108.26 46.81 108.86 46.506 109.38C46.21 109.892 45.806 110.288 45.294 110.568C44.782 110.848 44.214 110.988 43.59 110.988ZM43.59 110.028C43.982 110.028 44.35 109.936 44.694 109.752C45.038 109.568 45.314 109.292 45.522 108.924C45.738 108.556 45.846 108.108 45.846 107.58C45.846 107.052 45.742 106.604 45.534 106.236C45.326 105.868 45.054 105.596 44.718 105.42C44.382 105.236 44.018 105.144 43.626 105.144C43.226 105.144 42.858 105.236 42.522 105.42C42.194 105.596 41.93 105.868 41.73 106.236C41.53 106.604 41.43 107.052 41.43 107.58C41.43 108.116 41.526 108.568 41.718 108.936C41.918 109.304 42.182 109.58 42.51 109.764C42.838 109.94 43.198 110.028 43.59 110.028Z"
                fill="#30312C"
              />
              <path d="M49.4898 102V110.88H48.3978V102H49.4898Z" fill="#30312C" />
              <path
                d="M52.6829 105.204V109.08C52.6829 109.4 52.7509 109.628 52.8869 109.764C53.0229 109.892 53.2589 109.956 53.5949 109.956H54.3989V110.88H53.4149C52.8069 110.88 52.3509 110.74 52.0469 110.46C51.7429 110.18 51.5909 109.72 51.5909 109.08V105.204H50.7389V104.304H51.5909V102.648H52.6829V104.304H54.3989V105.204H52.6829Z"
                fill="#30312C"
              />
              <path
                d="M55.314 107.568C55.314 106.896 55.45 106.308 55.722 105.804C55.994 105.292 56.366 104.896 56.838 104.616C57.318 104.336 57.85 104.196 58.434 104.196C59.01 104.196 59.51 104.32 59.934 104.568C60.358 104.816 60.674 105.128 60.882 105.504V104.304H61.986V110.88H60.882V109.656C60.666 110.04 60.342 110.36 59.91 110.616C59.486 110.864 58.99 110.988 58.422 110.988C57.838 110.988 57.31 110.844 56.838 110.556C56.366 110.268 55.994 109.864 55.722 109.344C55.45 108.824 55.314 108.232 55.314 107.568ZM60.882 107.58C60.882 107.084 60.782 106.652 60.582 106.284C60.382 105.916 60.11 105.636 59.766 105.444C59.43 105.244 59.058 105.144 58.65 105.144C58.242 105.144 57.87 105.24 57.534 105.432C57.198 105.624 56.93 105.904 56.73 106.272C56.53 106.64 56.43 107.072 56.43 107.568C56.43 108.072 56.53 108.512 56.73 108.888C56.93 109.256 57.198 109.54 57.534 109.74C57.87 109.932 58.242 110.028 58.65 110.028C59.058 110.028 59.43 109.932 59.766 109.74C60.11 109.54 60.382 109.256 60.582 108.888C60.782 108.512 60.882 108.076 60.882 107.58Z"
                fill="#30312C"
              />

              <path
                d="M64.9234 105.372C65.1154 104.996 65.3874 104.704 65.7394 104.496C66.0994 104.288 66.5354 104.184 67.0474 104.184V105.312H66.7594C65.5354 105.312 64.9234 105.976 64.9234 107.304V110.88H63.8314V104.304H64.9234V105.372Z"
                fill="#30312C"
              />
            </>
          )}
        </svg>
      </span>
    </Link>
  );
};

export default Logo;
