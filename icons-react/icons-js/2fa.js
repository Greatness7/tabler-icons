import * as React from "react";

const Icon2fa = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-2fa" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 16h-4 l3.47 -4.66 a2 2 0 1 0 -3.47 -1.54" /><path d="M10 16v-8h4" /><line x1={10} y1={12} x2={13} y2={12} /><path d="M17 16v-6a2 2 0 0 1 4 0v6" /><line x1={17} y1={13} x2={21} y2={13} /></svg>;

export default Icon2fa;