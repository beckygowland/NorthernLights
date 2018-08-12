import * as views from 'co-views';

const render = views('/usr/src/app/dist', {  
    map: {
        html: 'ejs'
    }
});

export default render;