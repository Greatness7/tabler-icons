import * as React from "react";

const IconPrompt = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-prompt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="5 7 10 12 5 17" /><line x1={13} y1={17} x2={19} y2={17} /></svg>;

export default IconPrompt;