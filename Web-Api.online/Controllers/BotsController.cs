﻿using Microsoft.AspNetCore.Mvc;

using System;
using System.Security.Claims;
using System.Threading.Tasks;

using Web_Api.online.Models;
using Web_Api.online.Models.StoredProcedures;
using Web_Api.online.Repositories;

namespace Web_Api.online.Controllers
{
    public class BotsController : Controller
    {
        private readonly BotsRepository _botsRepository;

        public BotsController(
            BotsRepository botsRepository)
        {
            _botsRepository = botsRepository;
        }
        public async Task<ActionResult> Index()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (!string.IsNullOrEmpty(userId))
            {
                var model = await _botsRepository.GetBotByUserId(userId);

                return View(model);
            }
            else
            {
                return Redirect("/Identity/Account/Login?ReturnUrl=%2FBots");
            }
        }

        [HttpPost]
        [Route("Bots/Create")]
        public async Task<ActionResult> CreateBot(string botName)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (!string.IsNullOrEmpty(userId))
            {
                await _botsRepository.CreateBot(new Args_spCreateBot()
                {
                    BotAuthCode = Guid.NewGuid().ToString(),
                    Name = botName,
                    UserId = userId
                });

                return Ok();
            }
            else
            {
                return BadRequest("You're not authorized");
            }
        }
    }
}
