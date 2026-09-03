import{C as p}from"../styled-components-D2iiFT0j.js";var y=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},r=function(){return r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var m in e)Object.prototype.hasOwnProperty.call(e,m)&&(t[m]=e[m])}return t},r.apply(this,arguments)},M=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,n=Object.getOwnPropertySymbols(t);m<n.length;m++)e.indexOf(n[m])<0&&Object.prototype.propertyIsEnumerable.call(t,n[m])&&(o[n[m]]=t[n[m]]);return o},B=function(t,e,o){if(o||arguments.length===2)for(var n=0,m=e.length,i;n<m;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))},w=function(t){return Object.entries(t).reduce(function(e,o){var n=o[0],m=o[1];return Object.entries(m).forEach(function(i){var l=i[0],a=i[1];e["--plasma-typo-".concat(n,"-").concat(l)]=a}),e},{})},E=["font-family","font-size","font-style","font-weight","letter-spacing","line-height"],S=function(t,e,o){return o===void 0&&(o=""),Object.entries(t).reduce(function(n,m){var i=m[0],l=m[1],a=l.name,f=M(l,["name"]),s="--".concat(e,"typo-").concat(i),b="--".concat(o,"typo-").concat(a);return E.forEach(function(h){n["".concat(s,"-").concat(h)]="var(".concat(b,"-").concat(h,")")}),Object.entries(f).forEach(function(h){var A=h[0],C=h[1];n["".concat(s,"-").concat(A)]=C}),n},{})},c=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return B([],t,!0).reduce(function(o,n){return Object.entries(n).reduce(function(m,i){var l,a=i[0],f=i[1];return r(r({},m),(l={},l[a]=r(r({},m[a]),f),l))},o)},{})},L=function(t){var e=t.displayFontFamily,o=t.textFontFamily,n=t.typoS,m=t.typoM,i=t.typoL;return function(l){var a=l.deviceScale,f=a===void 0?1:a,s=l.breakWord,b=s===void 0?!0:s;return p(j||(j=y([`
            :root {
                --plasma-typo-display-font-family: '`,"', '",`', sans-serif;
                --plasma-typo-text-font-family: '`,"', '",`', sans-serif;
                --plasma-typo-dspl-l-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-l-font-style: normal;
                --plasma-typo-dspl-l-letter-spacing: normal;
                --plasma-typo-dspl-m-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-m-font-style: normal;
                --plasma-typo-dspl-m-letter-spacing: normal;
                --plasma-typo-dspl-s-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-s-font-style: normal;
                --plasma-typo-dspl-s-letter-spacing: normal;
                --plasma-typo-h1-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h1-font-style: normal;
                --plasma-typo-h1-letter-spacing: normal;
                --plasma-typo-h2-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h2-font-style: normal;
                --plasma-typo-h2-letter-spacing: normal;
                --plasma-typo-h3-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h3-font-style: normal;
                --plasma-typo-h3-letter-spacing: normal;
                --plasma-typo-h4-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h4-font-style: normal;
                --plasma-typo-h4-letter-spacing: normal;
                --plasma-typo-h5-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h5-font-style: normal;
                --plasma-typo-h5-letter-spacing: normal;
                --plasma-typo-body-l-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-l-font-style: normal;
                --plasma-typo-body-l-letter-spacing: -0.02em;
                --plasma-typo-body-m-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-m-font-style: normal;
                --plasma-typo-body-m-letter-spacing: -0.02em;
                --plasma-typo-body-s-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-s-font-style: normal;
                --plasma-typo-body-s-letter-spacing: -0.02em;
                --plasma-typo-body-xs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-xs-font-style: normal;
                --plasma-typo-body-xs-letter-spacing: -0.02em;
                --plasma-typo-body-xxs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-xxs-font-style: normal;
                --plasma-typo-body-xxs-letter-spacing: -0.02em;
                --plasma-typo-text-l-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-l-font-style: normal;
                --plasma-typo-text-l-letter-spacing: -0.02em;
                --plasma-typo-text-m-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-m-font-style: normal;
                --plasma-typo-text-m-letter-spacing: -0.02em;
                --plasma-typo-text-s-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-s-font-style: normal;
                --plasma-typo-text-s-letter-spacing: -0.02em;
                --plasma-typo-text-xs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-xs-font-style: normal;
                --plasma-typo-text-xs-letter-spacing: -0.02em;

                font-size: `,`px;

                `,`

                `,`

                `,`

                `,`
            }
        `],[`
            :root {
                --plasma-typo-display-font-family: '`,"', '",`', sans-serif;
                --plasma-typo-text-font-family: '`,"', '",`', sans-serif;
                --plasma-typo-dspl-l-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-l-font-style: normal;
                --plasma-typo-dspl-l-letter-spacing: normal;
                --plasma-typo-dspl-m-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-m-font-style: normal;
                --plasma-typo-dspl-m-letter-spacing: normal;
                --plasma-typo-dspl-s-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-dspl-s-font-style: normal;
                --plasma-typo-dspl-s-letter-spacing: normal;
                --plasma-typo-h1-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h1-font-style: normal;
                --plasma-typo-h1-letter-spacing: normal;
                --plasma-typo-h2-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h2-font-style: normal;
                --plasma-typo-h2-letter-spacing: normal;
                --plasma-typo-h3-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h3-font-style: normal;
                --plasma-typo-h3-letter-spacing: normal;
                --plasma-typo-h4-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h4-font-style: normal;
                --plasma-typo-h4-letter-spacing: normal;
                --plasma-typo-h5-font-family: var(--plasma-typo-display-font-family);
                --plasma-typo-h5-font-style: normal;
                --plasma-typo-h5-letter-spacing: normal;
                --plasma-typo-body-l-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-l-font-style: normal;
                --plasma-typo-body-l-letter-spacing: -0.02em;
                --plasma-typo-body-m-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-m-font-style: normal;
                --plasma-typo-body-m-letter-spacing: -0.02em;
                --plasma-typo-body-s-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-s-font-style: normal;
                --plasma-typo-body-s-letter-spacing: -0.02em;
                --plasma-typo-body-xs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-xs-font-style: normal;
                --plasma-typo-body-xs-letter-spacing: -0.02em;
                --plasma-typo-body-xxs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-body-xxs-font-style: normal;
                --plasma-typo-body-xxs-letter-spacing: -0.02em;
                --plasma-typo-text-l-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-l-font-style: normal;
                --plasma-typo-text-l-letter-spacing: -0.02em;
                --plasma-typo-text-m-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-m-font-style: normal;
                --plasma-typo-text-m-letter-spacing: -0.02em;
                --plasma-typo-text-s-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-s-font-style: normal;
                --plasma-typo-text-s-letter-spacing: -0.02em;
                --plasma-typo-text-xs-font-family: var(--plasma-typo-text-font-family);
                --plasma-typo-text-xs-font-style: normal;
                --plasma-typo-text-xs-letter-spacing: -0.02em;

                font-size: `,`px;

                `,`

                `,`

                `,`

                `,`
            }
        `])),e,e==null?void 0:e.split(" ").join(""),o,o==null?void 0:o.split(" ").join(""),16*f,b&&p(z||(z=y([`
                        --plasma-typo-overflow-wrap: break-word;
                        --plasma-typo-hyphens: auto;
                    `],[`
                        --plasma-typo-overflow-wrap: break-word;
                        --plasma-typo-hyphens: auto;
                    `]))),n&&p(u||(u=y([`
                        @media (max-width: `,`px) {
                            `,`
                        }
                    `],[`
                        @media (max-width: `,`px) {
                            `,`
                        }
                    `])),559*f,w(n)),m&&p(v||(v=y([`
                        @media (min-width: `,"px) and (max-width: ",`px) {
                            `,`
                        }
                    `],[`
                        @media (min-width: `,"px) and (max-width: ",`px) {
                            `,`
                        }
                    `])),560*f,959*f,w(m)),i&&p(O||(O=y([`
                        @media (min-width: `,`px) {
                            `,`
                        }
                    `],[`
                        @media (min-width: `,`px) {
                            `,`
                        }
                    `])),960*f,w(i)))}},z,u,v,O,j,_={display1:{name:"dspl-l","font-weight":"600"},display2:{name:"dspl-m","font-weight":"600"},display3:{name:"dspl-s","font-weight":"600"},headline1:{name:"h1","font-weight":"600"},headline2:{name:"h2","font-weight":"600"},headline3:{name:"h3","font-weight":"600"},headline4:{name:"h3","font-weight":"600"},body1:{name:"body-m","font-weight":"400"},body2:{name:"body-m","font-weight":"600"},body3:{name:"body-m","font-weight":"600"},paragraph1:{name:"text-m","font-weight":"400"},paragraph2:{name:"text-m","font-weight":"600"},footnote1:{name:"body-s","font-weight":"400"},footnote2:{name:"body-s","font-weight":"600"},button1:{name:"body-m","font-weight":"600"},button2:{name:"body-s","font-weight":"600"},caption:{name:"body-xs","font-weight":"400"}},W={":root":S(_,"plasma-","plasma-")};S(_,"plasma-");var P={"dspl-l":{"font-size":"5.5rem","font-weight":"300","line-height":"5.75rem"},"dspl-l-bold":{"font-size":"5.5rem","font-weight":"600","line-height":"5.75rem"},"dspl-l-medium":{"font-size":"5.5rem","font-weight":"500","line-height":"5.75rem"},"dspl-m":{"font-size":"3.5rem","font-weight":"300","line-height":"3.875rem"},"dspl-m-bold":{"font-size":"3.5rem","font-weight":"600","line-height":"3.875rem"},"dspl-m-medium":{"font-size":"3.5rem","font-weight":"500","line-height":"3.875rem"},"dspl-s":{"font-size":"2.5rem","font-weight":"300","line-height":"2.875rem"},"dspl-s-bold":{"font-size":"2.5rem","font-weight":"600","line-height":"2.875rem"},"dspl-s-medium":{"font-size":"2.5rem","font-weight":"500","line-height":"2.875rem"},h1:{"font-size":"1.75rem","font-weight":"400","line-height":"2.125rem"},"h1-bold":{"font-size":"1.75rem","font-weight":"600","line-height":"2.125rem"},"h1-medium":{"font-size":"1.75rem","font-weight":"500","line-height":"2.125rem"},h2:{"font-size":"1.5rem","font-weight":"400","line-height":"1.875rem"},"h2-bold":{"font-size":"1.5rem","font-weight":"600","line-height":"1.875rem"},"h2-medium":{"font-size":"1.5rem","font-weight":"500","line-height":"1.875rem"},h3:{"font-size":"1.25rem","font-weight":"400","line-height":"1.625rem"},"h3-bold":{"font-size":"1.25rem","font-weight":"600","line-height":"1.625rem"},"h3-medium":{"font-size":"1.25rem","font-weight":"500","line-height":"1.625rem"},h4:{"font-size":"1.125rem","font-weight":"400","line-height":"1.5rem"},"h4-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.5rem"},"h4-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.5rem"},h5:{"font-size":"1rem","font-weight":"400","line-height":"1.375rem"},"h5-bold":{"font-size":"1rem","font-weight":"600","line-height":"1.375rem"},"h5-medium":{"font-size":"1rem","font-weight":"500","line-height":"1.375rem"},"body-l":{"font-size":"1.125rem","font-weight":"400","line-height":"1.375rem"},"body-l-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.375rem"},"body-l-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.375rem"},"body-m":{"font-size":"1rem","font-weight":"400","line-height":"1.25rem"},"body-m-bold":{"font-size":"1rem","font-weight":"600","line-height":"1.25rem"},"body-m-medium":{"font-size":"1rem","font-weight":"500","line-height":"1.25rem"},"body-s":{"font-size":"0.875rem","font-weight":"400","line-height":"1.125rem"},"body-s-bold":{"font-size":"0.875rem","font-weight":"600","line-height":"1.125rem"},"body-s-medium":{"font-size":"0.875rem","font-weight":"500","line-height":"1.125rem"},"body-xs":{"font-size":"0.75rem","font-weight":"400","line-height":"0.875rem"},"body-xs-bold":{"font-size":"0.75rem","font-weight":"600","line-height":"0.875rem"},"body-xs-medium":{"font-size":"0.75rem","font-weight":"500","line-height":"0.875rem"},"body-xxs":{"font-size":"0.625rem","font-weight":"400","line-height":"0.75rem"},"body-xxs-bold":{"font-size":"0.625rem","font-weight":"600","line-height":"0.75rem"},"body-xxs-medium":{"font-size":"0.625rem","font-weight":"500","line-height":"0.75rem"},"text-l":{"font-size":"1.125rem","font-weight":"400","line-height":"1.625rem"},"text-l-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.625rem"},"text-l-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.625rem"},"text-m":{"font-size":"1rem","font-weight":"400","line-height":"1.5rem"},"text-m-bold":{"font-size":"1rem","font-weight":"600","line-height":"1.5rem"},"text-m-medium":{"font-size":"1rem","font-weight":"500","line-height":"1.5rem"},"text-s":{"font-size":"0.875rem","font-weight":"400","line-height":"1.25rem"},"text-s-bold":{"font-size":"0.875rem","font-weight":"600","line-height":"1.25rem"},"text-s-medium":{"font-size":"0.875rem","font-weight":"500","line-height":"1.25rem"},"text-xs":{"font-size":"0.75rem","font-weight":"400","line-height":"1rem"},"text-xs-bold":{"font-size":"0.75rem","font-weight":"600","line-height":"1rem"},"text-xs-medium":{"font-size":"0.75rem","font-weight":"500","line-height":"1rem"}},T={"dspl-l":{"font-size":"7rem","font-weight":"300","line-height":"7rem"},"dspl-l-bold":{"font-size":"7rem","font-weight":"600","line-height":"7rem"},"dspl-l-medium":{"font-size":"7rem","font-weight":"500","line-height":"7rem"},"dspl-m":{"font-size":"4.5rem","font-weight":"300","line-height":"4.75rem"},"dspl-m-bold":{"font-size":"4.5rem","font-weight":"600","line-height":"4.75rem"},"dspl-m-medium":{"font-size":"4.5rem","font-weight":"500","line-height":"4.75rem"},"dspl-s":{"font-size":"3rem","font-weight":"300","line-height":"3.375rem"},"dspl-s-bold":{"font-size":"3rem","font-weight":"600","line-height":"3.375rem"},"dspl-s-medium":{"font-size":"3rem","font-weight":"500","line-height":"3.375rem"},h1:{"font-size":"2.5rem","font-weight":"400","line-height":"2.875rem"},"h1-bold":{"font-size":"2.5rem","font-weight":"600","line-height":"2.875rem"},"h1-medium":{"font-size":"2.5rem","font-weight":"500","line-height":"2.875rem"},h2:{"font-size":"1.75rem","font-weight":"400","line-height":"2.125rem"},"h2-bold":{"font-size":"1.75rem","font-weight":"600","line-height":"2.125rem"},"h2-medium":{"font-size":"1.75rem","font-weight":"500","line-height":"2.125rem"},h3:{"font-size":"1.25rem","font-weight":"400","line-height":"1.625rem"},"h3-bold":{"font-size":"1.25rem","font-weight":"600","line-height":"1.625rem"},"h3-medium":{"font-size":"1.25rem","font-weight":"500","line-height":"1.625rem"},h4:{"font-size":"1.125rem","font-weight":"400","line-height":"1.5rem"},"h4-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.5rem"},"h4-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.5rem"},h5:{"font-size":"1rem","font-weight":"400","line-height":"1.375rem"},"h5-bold":{"font-size":"1rem","font-weight":"600","line-height":"1.375rem"},"h5-medium":{"font-size":"1rem","font-weight":"500","line-height":"1.375rem"},"body-l":{"font-size":"1.125rem","font-weight":"400","line-height":"1.375rem"},"body-l-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.375rem"},"body-l-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.375rem"},"body-m":{"font-size":"1rem","font-weight":"400","line-height":"1.25rem"},"body-m-bold":{"font-size":"1rem","font-weight":"600","line-height":"1.25rem"},"body-m-medium":{"font-size":"1rem","font-weight":"500","line-height":"1.25rem"},"body-s":{"font-size":"0.875rem","font-weight":"400","line-height":"1.125rem"},"body-s-bold":{"font-size":"0.875rem","font-weight":"600","line-height":"1.125rem"},"body-s-medium":{"font-size":"0.875rem","font-weight":"500","line-height":"1.125rem"},"body-xs":{"font-size":"0.75rem","font-weight":"400","line-height":"0.875rem"},"body-xs-bold":{"font-size":"0.75rem","font-weight":"600","line-height":"0.875rem"},"body-xs-medium":{"font-size":"0.75rem","font-weight":"500","line-height":"0.875rem"},"body-xxs":{"font-size":"0.625rem","font-weight":"400","line-height":"0.75rem"},"body-xxs-bold":{"font-size":"0.625rem","font-weight":"600","line-height":"0.75rem"},"body-xxs-medium":{"font-size":"0.625rem","font-weight":"500","line-height":"0.75rem"},"text-l":{"font-size":"1.25rem","font-weight":"400","line-height":"1.75rem"},"text-l-bold":{"font-size":"1.25rem","font-weight":"600","line-height":"1.75rem"},"text-l-medium":{"font-size":"1.25rem","font-weight":"500","line-height":"1.75rem"},"text-m":{"font-size":"1rem","font-weight":"400","line-height":"1.5rem"},"text-m-bold":{"font-size":"1rem","font-weight":"600","line-height":"1.5rem"},"text-m-medium":{"font-size":"1rem","font-weight":"500","line-height":"1.5rem"},"text-s":{"font-size":"0.875rem","font-weight":"400","line-height":"1.25rem"},"text-s-bold":{"font-size":"0.875rem","font-weight":"600","line-height":"1.25rem"},"text-s-medium":{"font-size":"0.875rem","font-weight":"500","line-height":"1.25rem"},"text-xs":{"font-size":"0.75rem","font-weight":"400","line-height":"1rem"},"text-xs-bold":{"font-size":"0.75rem","font-weight":"600","line-height":"1rem"},"text-xs-medium":{"font-size":"0.75rem","font-weight":"500","line-height":"1rem"}},k={"dspl-l":{"font-size":"8rem","font-weight":"300","line-height":"8rem"},"dspl-l-bold":{"font-size":"8rem","font-weight":"600","line-height":"8rem"},"dspl-l-medium":{"font-size":"8rem","font-weight":"500","line-height":"8rem"},"dspl-m":{"font-size":"5.5rem","font-weight":"300","line-height":"5.75rem"},"dspl-m-bold":{"font-size":"5.5rem","font-weight":"600","line-height":"5.75rem"},"dspl-m-medium":{"font-size":"5.5rem","font-weight":"500","line-height":"5.75rem"},"dspl-s":{"font-size":"4rem","font-weight":"300","line-height":"4.25rem"},"dspl-s-bold":{"font-size":"4rem","font-weight":"600","line-height":"4.25rem"},"dspl-s-medium":{"font-size":"4rem","font-weight":"500","line-height":"4.25rem"},h1:{"font-size":"3rem","font-weight":"400","line-height":"3.375rem"},"h1-bold":{"font-size":"3rem","font-weight":"600","line-height":"3.375rem"},"h1-medium":{"font-size":"3rem","font-weight":"500","line-height":"3.375rem"},h2:{"font-size":"2rem","font-weight":"400","line-height":"2.375rem"},"h2-bold":{"font-size":"2rem","font-weight":"600","line-height":"2.375rem"},"h2-medium":{"font-size":"2rem","font-weight":"500","line-height":"2.375rem"},h3:{"font-size":"1.5rem","font-weight":"400","line-height":"1.875rem"},"h3-bold":{"font-size":"1.5rem","font-weight":"600","line-height":"1.875rem"},"h3-medium":{"font-size":"1.5rem","font-weight":"500","line-height":"1.875rem"},h4:{"font-size":"1.25rem","font-weight":"400","line-height":"1.625rem"},"h4-bold":{"font-size":"1.25rem","font-weight":"600","line-height":"1.625rem"},"h4-medium":{"font-size":"1.25rem","font-weight":"500","line-height":"1.625rem"},h5:{"font-size":"1.125rem","font-weight":"400","line-height":"1.5rem"},"h5-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.5rem"},"h5-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.5rem"},"body-l":{"font-size":"1.125rem","font-weight":"400","line-height":"1.375rem"},"body-l-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.375rem"},"body-l-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.375rem"},"body-m":{"font-size":"1rem","font-weight":"400","line-height":"1.25rem"},"body-m-bold":{"font-size":"1rem","font-weight":"600","line-height":"1.25rem"},"body-m-medium":{"font-size":"1rem","font-weight":"500","line-height":"1.25rem"},"body-s":{"font-size":"0.875rem","font-weight":"400","line-height":"1.125rem"},"body-s-bold":{"font-size":"0.875rem","font-weight":"600","line-height":"1.125rem"},"body-s-medium":{"font-size":"0.875rem","font-weight":"500","line-height":"1.125rem"},"body-xs":{"font-size":"0.75rem","font-weight":"400","line-height":"0.875rem"},"body-xs-bold":{"font-size":"0.75rem","font-weight":"600","line-height":"0.875rem"},"body-xs-medium":{"font-size":"0.75rem","font-weight":"500","line-height":"0.875rem"},"body-xxs":{"font-size":"0.625rem","font-weight":"400","line-height":"0.75rem"},"body-xxs-bold":{"font-size":"0.625rem","font-weight":"600","line-height":"0.75rem"},"body-xxs-medium":{"font-size":"0.625rem","font-weight":"500","line-height":"0.75rem"},"text-l":{"font-size":"1.5rem","font-weight":"400","line-height":"2rem"},"text-l-bold":{"font-size":"1.5rem","font-weight":"600","line-height":"2rem"},"text-l-medium":{"font-size":"1.5rem","font-weight":"500","line-height":"2rem"},"text-m":{"font-size":"1.125rem","font-weight":"400","line-height":"1.625rem"},"text-m-bold":{"font-size":"1.125rem","font-weight":"600","line-height":"1.625rem"},"text-m-medium":{"font-size":"1.125rem","font-weight":"500","line-height":"1.625rem"},"text-s":{"font-size":"0.875rem","font-weight":"400","line-height":"1.25rem"},"text-s-bold":{"font-size":"0.875rem","font-weight":"600","line-height":"1.25rem"},"text-s-medium":{"font-size":"0.875rem","font-weight":"500","line-height":"1.25rem"},"text-xs":{"font-size":"0.75rem","font-weight":"400","line-height":"1rem"},"text-xs-bold":{"font-size":"0.75rem","font-weight":"600","line-height":"1rem"},"text-xs-medium":{"font-size":"0.75rem","font-weight":"500","line-height":"1rem"}},x=function(t,e){return{"dspl-l":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-l-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-l-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-m":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-m-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-m-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-s":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-s-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"dspl-s-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},h1:{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h1-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h1-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},h2:{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h2-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h2-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},h3:{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h3-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h3-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},h4:{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h4-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h4-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},h5:{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h5-bold":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"h5-medium":{"font-family":t,"letter-spacing":"normal","font-style":"normal"},"body-l":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-l-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-l-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-m":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-m-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-m-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-s":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-s-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-s-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-xs":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-xs-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-xs-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-xxs":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-xxs-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"body-xxs-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-l":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-l-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-l-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-m":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-m-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-m-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-s":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-s-bold":{"font-family":e,"letter-spacing":"-0.02emm","font-style":"normal"},"text-s-medium":{"font-family":e,"letter-spacing":"-0.02emm","font-style":"normal"},"text-xs":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-xs-bold":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"},"text-xs-medium":{"font-family":e,"letter-spacing":"-0.02em","font-style":"normal"}}},g="SB Sans Display",d="SB Sans Text";c(P,x(g,d)),c(T,x(g,d)),c(k,x(g,d));var K={displayFontFamily:g,textFontFamily:d,typoS:P,typoM:T,typoL:k},I=L(K);export{W as c,I as m};
