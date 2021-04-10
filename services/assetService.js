const appRoot = require('app-root-path');
const assetModel = require(appRoot + '/_api/Models/assets/assetModel')


exports.getAssets = (queryString, callback) => {

    //result= respose from Asset get 

    assetModel.find((err, result) => {

        if (err) {
            //error for database had error while searching ,errot 500 status
            callback(null, err);
            return;
        } else {
            // send list of assets 
            callback(null, result);
            return;
        }
    })

}

 exports.getAssetById = (id, callback) => {
    assetModel.findById(id, (err, asset) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (asset == null) {
                var response = {
                    "message": "no asset found"
                }

                callback(null, response);
                return;
            } else {
                callback(null, asset);
                return;
             }
        }

    })

} 

exports.postAsset = (asset, callback) => {
    assetModel.create(asset, (err, createdAsset) => {
        if (err) {
            callback(null, err);
            return;

        } else {
            callback(null, createdAsset);
            return;
        }
    })
}


exports.patchAsset = (id, asset, callback) => {
    console.log("id=" + id)

    assetModel.findById(id, (err, result) => {

        //handle  database error 
        if (err) {
            callback(null, err)
            return;
        } else {
            if (result != null) {
                result.assetName = asset.assetName || result.assetName;
                result.assetType = asset.assetType || result.assetType;
                result.issueDate = Date.now()

                //save updated data in database 
                result.save((err, result) => {
                    if (err) {
                        callback(null, err)
                        return;
                    } else {
                        callback(null, result);
                        return;
                    }
                })

            } else {
                let Msg = { err: "Asset NOt Found." }
                callback(null, Msg);
                return;
            }
        }
    })
}

exports.deleteAsset =  (id, issueDate, callback) => {
    assetModel.findByIdAndRemove(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = {
                    message: "asset not found"
                }
                callback(null, response)
                return;
            } else {
                let response = {
                    message: "asset is succesfully deleted ",
                    id: result._id

                }
                callback(null, response)
                return;

            }
        }
    })
}


