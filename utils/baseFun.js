/**
 *设置响应数据
 *
 * @param {object} res 
 * @param {boolean} ret 
 * @param {string} message
 * @param {object} dataInfo
 * @param {number} [httpStatus=200]
 */
function setResInfo(res,ret,message,dataInfo,httpStatus=200) {
    let retInfo={}
    if(!ret){
        retInfo={
            'ret':-1,
            'message':message?message:'error',
            'data':{}
        }
    }else{
        retInfo={
            'ret':0,
            'message':message?message:'success',
            'data':dataInfo?dataInfo:{}
        }
    }
    res.writeHead(httpStatus,{'Content-Type':'text/plain'});
    res.write(JSON.stringify(retInfo))
    res.end();
    return
}
module.exports = {
    setResInfo
};
