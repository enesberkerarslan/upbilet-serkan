﻿namespace ApiLayer.Models
{
    public class ApiResponse<T>
    {
        public bool isError { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }

        public ApiResponse(bool success, string message, T data = default)
        {
            isError = success;
            Message = message;
            Data = data;
        }
    }
}
