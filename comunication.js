!function(){const t=_0x2dc6,r=_0x12ed();for(;;)try{if(343204==-parseInt(t(424))+-parseInt(t(419))/2+parseInt(t(411))/3+-parseInt(t(420))/4+-parseInt(t(399))/5*(parseInt(t(398))/6)+-parseInt(t(392))/7+-parseInt(t(385))/8*(-parseInt(t(408))/9))break;r.push(r.shift())}catch(t){r.push(r.shift())}}();let comunication_queue=[],uart_port,uart_reader,uart_writer,lock=null;function delay(r){return new Promise(t=>setTimeout(t,r))}function wait_lock(){return new Promise(t=>{lock=t})}function release_lock(){const t=_0x2dc6;lock&&({sZlhr:function(t){return t()}}[t(388)](lock),lock=null)}function _0x2dc6(t,r){var n=_0x12ed();return(_0x2dc6=function(t,r){return n[t-=379]})(t,r)}function comunication_check_uart_feature(){const t=_0x2dc6,r={nNFAo:function(t,r){return t in r},WIuKR:t(405)};return!!r[t(406)](r[t(391)],navigator)}async function comunication_init_uart(){const r=_0x2dc6,n={eWwPO:r(407)+r(383),BoxqR:function(t){return t()},ssljo:function(t){return t()},JWvoU:function(t,r){return t(r)},KCRvF:function(t,r){return t+r},mKGbN:r(403)+r(380)+r(387)};try{var e=n[r(430)][r(435)]("|");let t=0;for(;;){switch(e[t++]){case"0":uart_writer=uart_port[r(390)][r(409)]();continue;case"1":uart_port=await navigator[r(405)][r(417)+"t"]();continue;case"2":uart_reader=uart_port[r(414)][r(389)]();continue;case"3":await uart_port[r(394)]({baudRate:115200});continue;case"4":comunication_mode=1;continue;case"5":n[r(402)](write_worker_start);continue;case"6":n[r(401)](read_worker_start);continue;case"7":return!0}break}}catch(t){return n[r(382)](alert,n[r(413)](n[r(416)],t)),!1}}function write_worker_start(){const n=_0x2dc6,e={RWZRz:function(t,r){return r<t},jogXG:function(t,r,n){return t(r,n)}};e[n(397)](setInterval,async function(){const t=n;var r;e[t(412)](comunication_queue[t(432)],0)&&(r=comunication_queue[t(427)](),await uart_writer[t(428)](r))},30)}async function read_worker_start(){const r=_0x2dc6,n={BidRT:function(t,r){return t<r},awbPo:function(t,r){return t===r},DzVXQ:function(t,r){return t(r)},qraQt:function(t,r){return t+r},csykZ:r(410)+r(415)+r(433),FeDuB:r(425),JYtvR:function(t,r){return t(r)},alKdW:r(434)+r(422)},e=new TextDecoder;let o=[];try{for(;;){var a,{value:c,done:t}=await uart_reader[r(431)]();if(t){uart_reader[r(423)+"k"](),o=[];break}for(let t=0;n[r(379)](t,c[r(432)]);t++)n[r(396)](c[t],10)?(a=e[r(386)](new Uint8Array(o)),o=[],n[r(404)](parameter_process_data,a)):o[r(426)](c[t])}}catch(t){n[r(404)](alert,n[r(436)](n[r(418)],t)),n[r(404)]($,n[r(395)])[r(381)](),n[r(429)]($,n[r(384)])[r(400)]()}}async function disable_communication(){const t=_0x2dc6;location[t(421)]()}function _0x12ed(){var t=["772203rZdXEd","RWZRz","KCRvF","readable","rputus, Er","mKGbN","requestPor","csykZ","473998Qhggom","1760116FEfmLz","reload","n-screen","releaseLoc","586063oIoybb",".modal","push","shift","write","JYtvR","eWwPO","read","length","ror: ",".connectio","split","qraQt","BidRT","rial Gagal","hide","JWvoU","5|4|7","alKdW","5880480vXUcLf","decode",", Error: ","sZlhr","getReader","writable","WIuKR","300160rrNfTV","encode","open","FeDuB","awbPo","jogXG","470076BDuKYt","5sudzee","show","ssljo","BoxqR","Koneksi Se","DzVXQ","serial","nNFAo","1|3|2|0|6|","18FwjPpF","getWriter","Koneksi Te"];return(_0x12ed=function(){return t})()}function comunication_send_data(t){const r=_0x2dc6,n=new TextEncoder;comunication_queue[r(426)](n[r(393)](t))}