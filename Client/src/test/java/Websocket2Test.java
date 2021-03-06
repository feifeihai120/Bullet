/**
 * Created by marker on 2017/11/19.
 */

import com.wuweibi.bullet.ConfigUtils;
import com.wuweibi.bullet.client.BulletClient;
import org.junit.Test;

import javax.websocket.ContainerProvider;
import javax.websocket.DeploymentException;
import javax.websocket.Session;
import javax.websocket.WebSocketContainer;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

/**
 *
 *
 * @author marker
 * @create 2017-11-19 下午4:19
 **/
public class Websocket2Test  {


    @Test
    public void test() throws URISyntaxException, InterruptedException, IOException, DeploymentException {
        // 设置配置文件地址
        System.setProperty("java.bullet.conf.dir", "/WORK/git/Bullet/Client/conf");


        String url = ConfigUtils.getTunnel() +"/"+ ConfigUtils.getDeviceNo();
        System.out.println(url);

        ConfigUtils.getProperties();


        WebSocketContainer container = ContainerProvider.getWebSocketContainer(); // 获取WebSocket连接器，其中具体实现可以参照websocket-api.jar的源码,Class.forName("org.apache.tomcat.websocket.WsWebSocketContainer");

        Session session1 = container.connectToServer(BulletClient.class, new URI(url)); // 连接会话


        Thread.sleep(1000000L);





    }








}
