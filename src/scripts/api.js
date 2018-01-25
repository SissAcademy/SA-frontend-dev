import React from 'react'
import $ from "jquery"
import _ from 'lodash'

let config = 'localhost:8000/';

class Requests extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.ajax = window.$;
        this.url = 'localhost:8000/';
        Requests.Request = Requests.Request.bind(this)
    }

    static Request (options, async = true)
    {
        let url = `${config}${options.url}`;
        console.log(options);
        console.log(url);

        return $.ajax(_.extend(options, {url: url, async: async}));
    };

    static RequestWithSettings (method,url,data,async = true)
    {
        return Requests.Request({method:method, url:url, data:data}, async);
    };

    static Registration(data)
    {
        console.log(data);
        Requests.RequestWithSettings('POST','users/create',data, false)
    }

    static Ping()
    {
        $.ajax({dataType: 'json',url: "localhost:8000/ping", method:'GET'})
    }
}

export default Requests;