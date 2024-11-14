# 导入所需的库
from typing import Optional
import os
import anthropic
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

class AIService:
    def __init__(self):
        # 初始化Anthropic客户端，Anthropic 是一家 AI 公司,他们提供了 Claude 这个大语言模型。这个客户端库让开发者可以通过代码方便地:
        self.client = anthropic.Client(api_key=os.getenv("CLAUDE_API_KEY"))
        
    async def get_response(self, message: str) -> str:
        try:
            # 调用Claude API获取响应
            response = await self.client.messages.create(
                model="claude-3-sonnet-20240229",
                max_tokens=2000,
                messages=[{
                    "role": "user",
                    "content": message
                }]
            )
            # 返回AI的回复内容
            return response.content[0].text
        except Exception as e:
            # 记录错误并重新抛出
            print(f"AI服务错误: {str(e)}")
            raise 